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

resource "azurerm_sql_firewall_rule" "firewall_rule" {
  resource_group_name = azurerm_resource_group.rg.name
  server_name         = azurerm_sql_server.yallasql.name
  name                = "my-sql-firewall-rule"
  start_ip_address    = "41.62.253.236"
  end_ip_address      = "41.62.253.236"
}
