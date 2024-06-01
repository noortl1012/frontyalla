resource "azurerm_sql_server" "yallasql" {
  name                         = "yalla-sql-server"
  resource_group_name          = azurerm_resource_group.rg.name
  location                     = azurerm_resource_group.rg.location
  version                      = "12.0"
  administrator_login          = "adminlogin"
  administrator_login_password = "P@ssw0rd1234!"
}

resource "azurerm_sql_database" "yalladatabase" {
  name                = "yalla-sql-db"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  server_name         = azurerm_sql_server.yallasql.name
  edition             = "Standard"
  collation           = "SQL_Latin1_General_CP1_CI_AS"
}
/*
resource "azurerm_sql_firewall_rule" "firewall_rule" {
  resource_group_name = azurerm_resource_group.rg.name
  server_name         = azurerm_sql_server.yallasql.name
  name                = "my-sql-firewall-rule"
  start_ip_address    = "41.62.253.236"
  end_ip_address      = "41.62.253.236"
}
*/

// List of outbound IP addresses
locals {
  outbound_ip_addresses = [
    "20.74.119.173", "20.74.119.187", "20.74.119.209", "20.74.114.180", "20.74.115.103",
    "20.74.114.152", "20.74.40.91", "20.74.115.182", "20.74.115.218", "20.74.115.250",
    "20.74.116.134", "20.74.116.140", "20.74.116.243", "20.74.117.9", "20.74.117.48",
    "20.74.118.82", "20.74.118.181", "20.74.118.210", "20.74.118.239", "20.74.119.1",
    "20.74.119.15", "20.74.119.67", "20.74.119.113", "20.74.119.162", "20.74.119.173",
    "20.74.119.187", "20.74.119.209", "20.74.114.180", "20.74.115.103", "20.74.114.152",
    "20.74.114.134", "20.74.114.179", "20.74.113.223", "20.199.0.47", "20.199.1.158",
    "20.199.1.192", "20.111.1.9"
  ]
}

// Create a firewall rule for each IP address
resource "azurerm_sql_firewall_rule" "firewall_rules" {
  count               = length(local.outbound_ip_addresses)
  name                = "allow_ip_${count.index}"
  resource_group_name = azurerm_resource_group.rg.name
  server_name         = azurerm_sql_server.yallasql.name
  start_ip_address    = local.outbound_ip_addresses[count.index]
  end_ip_address      = local.outbound_ip_addresses[count.index]
}