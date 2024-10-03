import LayoutModule from "@highcharts/dashboards/modules/layout";
import Highcharts from "highcharts";
import Dashboards from "@highcharts/dashboards";
import DataGrid from "@highcharts/dashboards/datagrid";

LayoutModule(Dashboards);

Dashboards.HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.DataGridPlugin.custom.connectDataGrid(DataGrid);
Dashboards.PluginHandler.addPlugin(Dashboards.HighchartsPlugin);
Dashboards.PluginHandler.addPlugin(Dashboards.DataGridPlugin);
export const Dashboard = () => <div id="dashboard"></div>;
