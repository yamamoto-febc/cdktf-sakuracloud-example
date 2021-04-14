// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_vpc_router.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudVpcRouterConfig extends cdktf.TerraformMetaArguments {
  /** The name of zone that the VPCRouter is in (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** filter block */
  readonly filter?: DataSakuracloudVpcRouterFilter[];
}
export class DataSakuracloudVpcRouterDhcpServer extends cdktf.ComplexComputedList {

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // interface_index - computed: true, optional: false, required: false
  public get interfaceIndex() {
    return this.getNumberAttribute('interface_index');
  }

  // range_start - computed: true, optional: false, required: false
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }

  // range_stop - computed: true, optional: false, required: false
  public get rangeStop() {
    return this.getStringAttribute('range_stop');
  }
}
export class DataSakuracloudVpcRouterDhcpStaticMapping extends cdktf.ComplexComputedList {

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
}
export class DataSakuracloudVpcRouterFirewallExpression extends cdktf.ComplexComputedList {

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getBooleanAttribute('allow');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_network - computed: true, optional: false, required: false
  public get destinationNetwork() {
    return this.getStringAttribute('destination_network');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.getBooleanAttribute('logging');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_network - computed: true, optional: false, required: false
  public get sourceNetwork() {
    return this.getStringAttribute('source_network');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
}
export class DataSakuracloudVpcRouterFirewall extends cdktf.ComplexComputedList {

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.interpolationForAttribute('expression') as any;
  }

  // interface_index - computed: true, optional: false, required: false
  public get interfaceIndex() {
    return this.getNumberAttribute('interface_index');
  }
}
export class DataSakuracloudVpcRouterL2Tp extends cdktf.ComplexComputedList {

  // pre_shared_secret - computed: true, optional: false, required: false
  public get preSharedSecret() {
    return this.getStringAttribute('pre_shared_secret');
  }

  // range_start - computed: true, optional: false, required: false
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }

  // range_stop - computed: true, optional: false, required: false
  public get rangeStop() {
    return this.getStringAttribute('range_stop');
  }
}
export class DataSakuracloudVpcRouterPortForwarding extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // private_port - computed: true, optional: false, required: false
  public get privatePort() {
    return this.getNumberAttribute('private_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // public_port - computed: true, optional: false, required: false
  public get publicPort() {
    return this.getNumberAttribute('public_port');
  }
}
export class DataSakuracloudVpcRouterPptp extends cdktf.ComplexComputedList {

  // range_start - computed: true, optional: false, required: false
  public get rangeStart() {
    return this.getStringAttribute('range_start');
  }

  // range_stop - computed: true, optional: false, required: false
  public get rangeStop() {
    return this.getStringAttribute('range_stop');
  }
}
export class DataSakuracloudVpcRouterPrivateNetworkInterface extends cdktf.ComplexComputedList {

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }

  // switch_id - computed: true, optional: false, required: false
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }
}
export class DataSakuracloudVpcRouterPublicNetworkInterface extends cdktf.ComplexComputedList {

  // aliases - computed: true, optional: false, required: false
  public get aliases() {
    return this.getListAttribute('aliases');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // switch_id - computed: true, optional: false, required: false
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
}
export class DataSakuracloudVpcRouterSiteToSiteVpn extends cdktf.ComplexComputedList {

  // local_prefix - computed: true, optional: false, required: false
  public get localPrefix() {
    return this.getListAttribute('local_prefix');
  }

  // peer - computed: true, optional: false, required: false
  public get peer() {
    return this.getStringAttribute('peer');
  }

  // pre_shared_secret - computed: true, optional: false, required: false
  public get preSharedSecret() {
    return this.getStringAttribute('pre_shared_secret');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // routes - computed: true, optional: false, required: false
  public get routes() {
    return this.getListAttribute('routes');
  }
}
export class DataSakuracloudVpcRouterStaticNat extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
}
export class DataSakuracloudVpcRouterStaticRoute extends cdktf.ComplexComputedList {

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export class DataSakuracloudVpcRouterUser extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }
}
export interface DataSakuracloudVpcRouterFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudVpcRouterFilterConditionToTerraform(struct?: DataSakuracloudVpcRouterFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudVpcRouterFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudVpcRouterFilterCondition[];
}

function dataSakuracloudVpcRouterFilterToTerraform(struct?: DataSakuracloudVpcRouterFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudVpcRouterFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudVpcRouter extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudVpcRouterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_vpc_router',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._zone = config.zone;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dhcp_server - computed: true, optional: false, required: false
  public dhcpServer(index: string) {
    return new DataSakuracloudVpcRouterDhcpServer(this, 'dhcp_server', index);
  }

  // dhcp_static_mapping - computed: true, optional: false, required: false
  public dhcpStaticMapping(index: string) {
    return new DataSakuracloudVpcRouterDhcpStaticMapping(this, 'dhcp_static_mapping', index);
  }

  // firewall - computed: true, optional: false, required: false
  public firewall(index: string) {
    return new DataSakuracloudVpcRouterFirewall(this, 'firewall', index);
  }

  // icon_id - computed: true, optional: false, required: false
  public get iconId() {
    return this.getStringAttribute('icon_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_connection - computed: true, optional: false, required: false
  public get internetConnection() {
    return this.getBooleanAttribute('internet_connection');
  }

  // l2tp - computed: true, optional: false, required: false
  public l2Tp(index: string) {
    return new DataSakuracloudVpcRouterL2Tp(this, 'l2tp', index);
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // port_forwarding - computed: true, optional: false, required: false
  public portForwarding(index: string) {
    return new DataSakuracloudVpcRouterPortForwarding(this, 'port_forwarding', index);
  }

  // pptp - computed: true, optional: false, required: false
  public pptp(index: string) {
    return new DataSakuracloudVpcRouterPptp(this, 'pptp', index);
  }

  // private_network_interface - computed: true, optional: false, required: false
  public privateNetworkInterface(index: string) {
    return new DataSakuracloudVpcRouterPrivateNetworkInterface(this, 'private_network_interface', index);
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_netmask - computed: true, optional: false, required: false
  public get publicNetmask() {
    return this.getNumberAttribute('public_netmask');
  }

  // public_network_interface - computed: true, optional: false, required: false
  public publicNetworkInterface(index: string) {
    return new DataSakuracloudVpcRouterPublicNetworkInterface(this, 'public_network_interface', index);
  }

  // site_to_site_vpn - computed: true, optional: false, required: false
  public siteToSiteVpn(index: string) {
    return new DataSakuracloudVpcRouterSiteToSiteVpn(this, 'site_to_site_vpn', index);
  }

  // static_nat - computed: true, optional: false, required: false
  public staticNat(index: string) {
    return new DataSakuracloudVpcRouterStaticNat(this, 'static_nat', index);
  }

  // static_route - computed: true, optional: false, required: false
  public staticRoute(index: string) {
    return new DataSakuracloudVpcRouterStaticRoute(this, 'static_route', index);
  }

  // syslog_host - computed: true, optional: false, required: false
  public get syslogHost() {
    return this.getStringAttribute('syslog_host');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // user - computed: true, optional: false, required: false
  public user(index: string) {
    return new DataSakuracloudVpcRouterUser(this, 'user', index);
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataSakuracloudVpcRouterFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudVpcRouterFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      zone: cdktf.stringToTerraform(this._zone),
      filter: cdktf.listMapper(dataSakuracloudVpcRouterFilterToTerraform)(this._filter),
    };
  }
}
