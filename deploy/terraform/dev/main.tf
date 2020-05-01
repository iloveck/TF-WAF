provider "azurerm" {
    version = "~> 2.0"
    features {}
}

terraform {
 backend "azurerm" {
    /*resource_group_name   = "rg-terraform-cicd"
    storage_account_name  = "saterraformcicd"
    container_name        = "terraform"
    key                   = "tf/mglo-web-ui/poc/terraform.tfstate"
    subscription_id = "ac5d8c1d-bae3-43b9-9b21-07d431489f3f"
    tenant_id = "6855a1b4-3816-43d2-bf35-178317e72fb0"
    */
  }
}

module "resource_group" {
  source = "../modules/ResourceGroup"
  projectName = var.projectName
  componentName = var.componentName
  location = var.location
  environment = var.environment
}

module "application_insights" {
  source = "../modules/AppInsights"
  projectName = var.projectName
  componentName = var.componentName
  location = var.location
  environment = var.environment
  resourceGroupName = module.resource_group.name
}
/*
module "  " {
  source = "../modules/functions"
  resourceGroupName = module.resource_group.name
  appInsightsKey = module.application_insights.instrumentation_key
  projectName = var.projectName
  FunctionName = var.FunctionName
  componentName = var.componentName
  location = var.location
  environment = var.environment
  VnetName = var.VnetName
  VnetRGName = var.VnetRGName
  SubnetName = var.SubnetName
  FunctionAppPlanName = var.FunctionAppPlanName
  FunctionAppPlanRGName = var.FunctionAppPlanRGName
  allowed_ip_addresses = var.allowed_ip_addresses
  app_settings = var.app_settings
}
*/
module "application_gateway" {
  source = "../modules/AppGateway"
  VnetName = var.VnetName
  VnetRGName = var.VnetRGName
  SubnetName = var.SubnetName
  resourceGroupName = module.resource_group.name
  location = var.location
  AppGatewayWAFPolicy = var.AppGatewayWAFPolicy
  AppGatewayName  = var.AppGatewayName
  FrongEndIPAddr  = var.FrongEndIPAddr
  ssl_certificate_name  = var.ssl_certificate_name
  environment = var.environment
# appgw_fqdns = var.appgw_fqdns
}

