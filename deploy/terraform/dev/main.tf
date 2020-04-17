provider "azurerm" { 
    version = "~> 2.0"
    features {}
} 

terraform { 
 backend "azurerm" {

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

module "premium_function" {
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