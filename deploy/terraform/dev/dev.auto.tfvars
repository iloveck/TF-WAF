projectName = "mglo"
componentName = "web-ui"
location = "westus2"
environment = "poc"
VnetName = "az-np-westus2-usr-601-MGlo-network-vnet"
VnetRGName = "az-np-westus2-usr-601-MGlo-network"
SubnetName = "snet-applicationgateway"
FrongEndIPAddr = "10.211.17.69"       # applicationgateway 5th ip add
AppGatewayWAFPolicy = "mglo-app-gateway-waf-policy"
AppGatewayName = "mglo-app-gateway"
ssl_certificate_name = "AppGatewaySSL"
FunctionAppPlanName = "Member-Web"
FunctionAppPlanRGName = "Member-Web"
FunctionName = "mglo-web-ui-poc"
allowed_ip_addresses = ["170.172.0.0/16", "170.167.0.0/16","174.21.131.84/32","67.185.74.247/32"]
appgw_fqdns = ["webservertestpoc.azurewebsites.net"]
app_settings = {
    SearchApiKey = "3339A3616B72CCB106DC4CC32D62F4AB"
    SearchServiceName = "membership-adt"
    SearchPersonIndexName = "person-index"
    SearchApiDefaultPageSize = "20"
    WEBSITE_RUN_FROM_PACKAGE = "1"
    WEBSITE_ENABLE_SYNC_UPDATE_SITE = "true"
}
