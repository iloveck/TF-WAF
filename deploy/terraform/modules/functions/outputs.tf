output "function_name" {
  value = azurerm_function_app.this.name
}

output "rg_name" {
  value = azurerm_resource_group.this.name
}

output "subnet_address_prefix" {
  value = data.azurerm_subnet.this.address_prefix
  description = "Location of peered VNET"
}

output "subnet_name" {
  value = data.azurerm_subnet.this.name
  description = "Location of peered VNET"
}

output "vnet_id" {
  value = data.azurerm_virtual_network.this.id
  description = "Location of peered VNET"
}

output "vnet_name" {
  value = data.azurerm_virtual_network.this.name
  description = "VNET for functions backend integration"
}