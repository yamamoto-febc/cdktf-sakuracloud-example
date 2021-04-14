// https://www.terraform.io/docs/providers/sakuracloud/r/vpc_router.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcRouterConfig extends cdktf.TerraformMetaArguments {
  /** The description of the VPCRouter. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the VPCRouter */
  readonly iconId?: string;
  /** The flag to enable connecting to the Internet from the VPC Router */
  readonly internetConnection?: boolean;
  /** The name of the VPCRouter. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The plan name of the VPCRouter. This must be one of [`standard`/`premium`/`highspec`/`highspec4000`] */
  readonly plan?: string;
  /** The ip address of the syslog host to which the VPC Router sends logs */
  readonly syslogHost?: string;
  /** Any tags to assign to the VPCRouter */
  readonly tags?: string[];
  /** The version of the VPC Router */
  readonly version?: number;
  /** The name of zone that the VPCRouter will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** dhcp_server block */
  readonly dhcpServer?: VpcRouterDhcpServer[];
  /** dhcp_static_mapping block */
  readonly dhcpStaticMapping?: VpcRouterDhcpStaticMapping[];
  /** firewall block */
  readonly firewall?: VpcRouterFirewall[];
  /** l2tp block */
  readonly l2Tp?: VpcRouterL2Tp[];
  /** port_forwarding block */
  readonly portForwarding?: VpcRouterPortForwarding[];
  /** pptp block */
  readonly pptp?: VpcRouterPptp[];
  /** private_network_interface block */
  readonly privateNetworkInterface?: VpcRouterPrivateNetworkInterface[];
  /** public_network_interface block */
  readonly publicNetworkInterface?: VpcRouterPublicNetworkInterface[];
  /** site_to_site_vpn block */
  readonly siteToSiteVpn?: VpcRouterSiteToSiteVpn[];
  /** static_nat block */
  readonly staticNat?: VpcRouterStaticNat[];
  /** static_route block */
  readonly staticRoute?: VpcRouterStaticRoute[];
  /** timeouts block */
  readonly timeouts?: VpcRouterTimeouts;
  /** user block */
  readonly user?: VpcRouterUser[];
}
export interface VpcRouterDhcpServer {
  /** A list of IP address of DNS server to assign to DHCP client */
  readonly dnsServers?: string[];
  /** The index of the network interface on which to enable the DHCP service. This must be in the range [`1`-`7`] */
  readonly interfaceIndex: number;
  /** The start value of IP address range to assign to DHCP client */
  readonly rangeStart: string;
  /** The end value of IP address range to assign to DHCP client */
  readonly rangeStop: string;
}

function vpcRouterDhcpServerToTerraform(struct?: VpcRouterDhcpServer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
    interface_index: cdktf.numberToTerraform(struct!.interfaceIndex),
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
    range_stop: cdktf.stringToTerraform(struct!.rangeStop),
  }
}

export interface VpcRouterDhcpStaticMapping {
  /** The static IP address to assign to DHCP client */
  readonly ipAddress: string;
  /** The source MAC address of static mapping */
  readonly macAddress: string;
}

function vpcRouterDhcpStaticMappingToTerraform(struct?: VpcRouterDhcpStaticMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}

export interface VpcRouterFirewallExpression {
  /** The flag to allow the packet through the filter */
  readonly allow: boolean;
  /** The description of the expression. The length of this value must be in the range [`0`-`512`] */
  readonly description?: string;
  /** A destination IP address or CIDR block used for filtering (e.g. `192.0.2.1`, `192.0.2.0/24`) */
  readonly destinationNetwork?: string;
  /** A destination port number or port range used for filtering (e.g. `1024`, `1024-2048`). This is only used when `protocol` is `tcp` or `udp` */
  readonly destinationPort?: string;
  /** The flag to enable packet logging when matching the expression */
  readonly logging?: boolean;
  /** The protocol used for filtering. This must be one of [`tcp`/`udp`/`icmp`/`ip`] */
  readonly protocol: string;
  /** A source IP address or CIDR block used for filtering (e.g. `192.0.2.1`, `192.0.2.0/24`) */
  readonly sourceNetwork?: string;
  /** A source port number or port range used for filtering (e.g. `1024`, `1024-2048`). This is only used when `protocol` is `tcp` or `udp` */
  readonly sourcePort?: string;
}

function vpcRouterFirewallExpressionToTerraform(struct?: VpcRouterFirewallExpression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    description: cdktf.stringToTerraform(struct!.description),
    destination_network: cdktf.stringToTerraform(struct!.destinationNetwork),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    logging: cdktf.booleanToTerraform(struct!.logging),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_network: cdktf.stringToTerraform(struct!.sourceNetwork),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}

export interface VpcRouterFirewall {
  /** The direction to apply the firewall. This must be one of [`send`/`receive`] */
  readonly direction: string;
  /** The index of the network interface on which to enable filtering. This must be in the range [`0`-`7`] */
  readonly interfaceIndex?: number;
  /** expression block */
  readonly expression: VpcRouterFirewallExpression[];
}

function vpcRouterFirewallToTerraform(struct?: VpcRouterFirewall): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    interface_index: cdktf.numberToTerraform(struct!.interfaceIndex),
    expression: cdktf.listMapper(vpcRouterFirewallExpressionToTerraform)(struct!.expression),
  }
}

export interface VpcRouterL2Tp {
  /** The pre shared secret for L2TP/IPsec */
  readonly preSharedSecret: string;
  /** The start value of IP address range to assign to L2TP/IPsec client */
  readonly rangeStart: string;
  /** The end value of IP address range to assign to L2TP/IPsec client */
  readonly rangeStop: string;
}

function vpcRouterL2TpToTerraform(struct?: VpcRouterL2Tp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pre_shared_secret: cdktf.stringToTerraform(struct!.preSharedSecret),
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
    range_stop: cdktf.stringToTerraform(struct!.rangeStop),
  }
}

export interface VpcRouterPortForwarding {
  /** The description of the port forwarding. The length of this value must be in the range [`0`-`512`] */
  readonly description?: string;
  /** The destination ip address of the port forwarding */
  readonly privateIp: string;
  /** The destination port number of the port forwarding. This will be a port number on a private network */
  readonly privatePort: number;
  /** The protocol used for port forwarding. This must be one of [`tcp`/`udp`] */
  readonly protocol: string;
  /** The source port number of the port forwarding. This must be a port number on a public network */
  readonly publicPort: number;
}

function vpcRouterPortForwardingToTerraform(struct?: VpcRouterPortForwarding): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    private_port: cdktf.numberToTerraform(struct!.privatePort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    public_port: cdktf.numberToTerraform(struct!.publicPort),
  }
}

export interface VpcRouterPptp {
  /** The start value of IP address range to assign to PPTP client */
  readonly rangeStart: string;
  /** The end value of IP address range to assign to PPTP client */
  readonly rangeStop: string;
}

function vpcRouterPptpToTerraform(struct?: VpcRouterPptp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    range_start: cdktf.stringToTerraform(struct!.rangeStart),
    range_stop: cdktf.stringToTerraform(struct!.rangeStop),
  }
}

export interface VpcRouterPrivateNetworkInterface {
  /** The index of the network interface. This must be in the range [`1`-`7`] */
  readonly index: number;
  /** A list of ip address to assign to the network interface. This is required only one value when `plan` is `standard`, two values otherwise */
  readonly ipAddresses: string[];
  /** The bit length of the subnet to assign to the network interface */
  readonly netmask: number;
  /** The id of the connected switch */
  readonly switchId: string;
  /** The virtual IP address to assign to the network interface. This is only required when `plan` is not `standard` */
  readonly vip?: string;
}

function vpcRouterPrivateNetworkInterfaceToTerraform(struct?: VpcRouterPrivateNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
    netmask: cdktf.numberToTerraform(struct!.netmask),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
    vip: cdktf.stringToTerraform(struct!.vip),
  }
}

export interface VpcRouterPublicNetworkInterface {
  /** A list of ip alias to assign to the VPC Router. This can only be specified if `plan` is not `standard` */
  readonly aliases?: string[];
  /** The list of the IP address to assign to the VPC Router. This is required only one value when `plan` is `standard`, two values otherwise */
  readonly ipAddresses?: string[];
  /** The id of the switch to connect. This is only required when when `plan` is not `standard` */
  readonly switchId?: string;
  /** The virtual IP address of the VPC Router. This is only required when `plan` is not `standard` */
  readonly vip?: string;
  /** The Virtual Router Identifier. This is only required when `plan` is not `standard` */
  readonly vrid?: number;
}

function vpcRouterPublicNetworkInterfaceToTerraform(struct?: VpcRouterPublicNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aliases),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
    vip: cdktf.stringToTerraform(struct!.vip),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}

export interface VpcRouterSiteToSiteVpn {
  /** A list of CIDR block of the network under the VPC Router */
  readonly localPrefix: string[];
  /** The IP address of the opposing appliance connected to the VPC Router */
  readonly peer: string;
  /** The pre shared secret for the VPN. The length of this value must be in the range [`0`-`40`] */
  readonly preSharedSecret: string;
  /** The id of the opposing appliance connected to the VPC Router. This is typically set same as value of `peer` */
  readonly remoteId: string;
  /** A list of CIDR block of VPN connected networks */
  readonly routes: string[];
}

function vpcRouterSiteToSiteVpnToTerraform(struct?: VpcRouterSiteToSiteVpn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    local_prefix: cdktf.listMapper(cdktf.stringToTerraform)(struct!.localPrefix),
    peer: cdktf.stringToTerraform(struct!.peer),
    pre_shared_secret: cdktf.stringToTerraform(struct!.preSharedSecret),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    routes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.routes),
  }
}

export interface VpcRouterStaticNat {
  /** The description of the static nat. The length of this value must be in the range [`0`-`512`] */
  readonly description?: string;
  /** The private IP address used for the static NAT */
  readonly privateIp: string;
  /** The public IP address used for the static NAT */
  readonly publicIp: string;
}

function vpcRouterStaticNatToTerraform(struct?: VpcRouterStaticNat): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
  }
}

export interface VpcRouterStaticRoute {
  /** The IP address of the next hop */
  readonly nextHop: string;
  /** The CIDR block of destination */
  readonly prefix: string;
}

function vpcRouterStaticRouteToTerraform(struct?: VpcRouterStaticRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface VpcRouterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function vpcRouterTimeoutsToTerraform(struct?: VpcRouterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface VpcRouterUser {
  /** The user name used to authenticate remote access */
  readonly name: string;
  /** The password used to authenticate remote access */
  readonly password: string;
}

function vpcRouterUserToTerraform(struct?: VpcRouterUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


// Resource

export class VpcRouter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpcRouterConfig) {
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
    this._description = config.description;
    this._iconId = config.iconId;
    this._internetConnection = config.internetConnection;
    this._name = config.name;
    this._plan = config.plan;
    this._syslogHost = config.syslogHost;
    this._tags = config.tags;
    this._version = config.version;
    this._zone = config.zone;
    this._dhcpServer = config.dhcpServer;
    this._dhcpStaticMapping = config.dhcpStaticMapping;
    this._firewall = config.firewall;
    this._l2Tp = config.l2Tp;
    this._portForwarding = config.portForwarding;
    this._pptp = config.pptp;
    this._privateNetworkInterface = config.privateNetworkInterface;
    this._publicNetworkInterface = config.publicNetworkInterface;
    this._siteToSiteVpn = config.siteToSiteVpn;
    this._staticNat = config.staticNat;
    this._staticRoute = config.staticRoute;
    this._timeouts = config.timeouts;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // icon_id - computed: false, optional: true, required: false
  private _iconId?: string;
  public get iconId() {
    return this.getStringAttribute('icon_id');
  }
  public set iconId(value: string ) {
    this._iconId = value;
  }
  public resetIconId() {
    this._iconId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconIdInput() {
    return this._iconId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_connection - computed: false, optional: true, required: false
  private _internetConnection?: boolean;
  public get internetConnection() {
    return this.getBooleanAttribute('internet_connection');
  }
  public set internetConnection(value: boolean ) {
    this._internetConnection = value;
  }
  public resetInternetConnection() {
    this._internetConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetConnectionInput() {
    return this._internetConnection
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: string;
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string ) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_netmask - computed: true, optional: false, required: false
  public get publicNetmask() {
    return this.getNumberAttribute('public_netmask');
  }

  // syslog_host - computed: false, optional: true, required: false
  private _syslogHost?: string;
  public get syslogHost() {
    return this.getStringAttribute('syslog_host');
  }
  public set syslogHost(value: string ) {
    this._syslogHost = value;
  }
  public resetSyslogHost() {
    this._syslogHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogHostInput() {
    return this._syslogHost
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // version - computed: false, optional: true, required: false
  private _version?: number;
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number ) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
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

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer?: VpcRouterDhcpServer[];
  public get dhcpServer() {
    return this.interpolationForAttribute('dhcp_server') as any;
  }
  public set dhcpServer(value: VpcRouterDhcpServer[] ) {
    this._dhcpServer = value;
  }
  public resetDhcpServer() {
    this._dhcpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer
  }

  // dhcp_static_mapping - computed: false, optional: true, required: false
  private _dhcpStaticMapping?: VpcRouterDhcpStaticMapping[];
  public get dhcpStaticMapping() {
    return this.interpolationForAttribute('dhcp_static_mapping') as any;
  }
  public set dhcpStaticMapping(value: VpcRouterDhcpStaticMapping[] ) {
    this._dhcpStaticMapping = value;
  }
  public resetDhcpStaticMapping() {
    this._dhcpStaticMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStaticMappingInput() {
    return this._dhcpStaticMapping
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall?: VpcRouterFirewall[];
  public get firewall() {
    return this.interpolationForAttribute('firewall') as any;
  }
  public set firewall(value: VpcRouterFirewall[] ) {
    this._firewall = value;
  }
  public resetFirewall() {
    this._firewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall
  }

  // l2tp - computed: false, optional: true, required: false
  private _l2Tp?: VpcRouterL2Tp[];
  public get l2Tp() {
    return this.interpolationForAttribute('l2tp') as any;
  }
  public set l2Tp(value: VpcRouterL2Tp[] ) {
    this._l2Tp = value;
  }
  public resetL2Tp() {
    this._l2Tp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TpInput() {
    return this._l2Tp
  }

  // port_forwarding - computed: false, optional: true, required: false
  private _portForwarding?: VpcRouterPortForwarding[];
  public get portForwarding() {
    return this.interpolationForAttribute('port_forwarding') as any;
  }
  public set portForwarding(value: VpcRouterPortForwarding[] ) {
    this._portForwarding = value;
  }
  public resetPortForwarding() {
    this._portForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardingInput() {
    return this._portForwarding
  }

  // pptp - computed: false, optional: true, required: false
  private _pptp?: VpcRouterPptp[];
  public get pptp() {
    return this.interpolationForAttribute('pptp') as any;
  }
  public set pptp(value: VpcRouterPptp[] ) {
    this._pptp = value;
  }
  public resetPptp() {
    this._pptp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpInput() {
    return this._pptp
  }

  // private_network_interface - computed: false, optional: true, required: false
  private _privateNetworkInterface?: VpcRouterPrivateNetworkInterface[];
  public get privateNetworkInterface() {
    return this.interpolationForAttribute('private_network_interface') as any;
  }
  public set privateNetworkInterface(value: VpcRouterPrivateNetworkInterface[] ) {
    this._privateNetworkInterface = value;
  }
  public resetPrivateNetworkInterface() {
    this._privateNetworkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkInterfaceInput() {
    return this._privateNetworkInterface
  }

  // public_network_interface - computed: false, optional: true, required: false
  private _publicNetworkInterface?: VpcRouterPublicNetworkInterface[];
  public get publicNetworkInterface() {
    return this.interpolationForAttribute('public_network_interface') as any;
  }
  public set publicNetworkInterface(value: VpcRouterPublicNetworkInterface[] ) {
    this._publicNetworkInterface = value;
  }
  public resetPublicNetworkInterface() {
    this._publicNetworkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInterfaceInput() {
    return this._publicNetworkInterface
  }

  // site_to_site_vpn - computed: false, optional: true, required: false
  private _siteToSiteVpn?: VpcRouterSiteToSiteVpn[];
  public get siteToSiteVpn() {
    return this.interpolationForAttribute('site_to_site_vpn') as any;
  }
  public set siteToSiteVpn(value: VpcRouterSiteToSiteVpn[] ) {
    this._siteToSiteVpn = value;
  }
  public resetSiteToSiteVpn() {
    this._siteToSiteVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteVpnInput() {
    return this._siteToSiteVpn
  }

  // static_nat - computed: false, optional: true, required: false
  private _staticNat?: VpcRouterStaticNat[];
  public get staticNat() {
    return this.interpolationForAttribute('static_nat') as any;
  }
  public set staticNat(value: VpcRouterStaticNat[] ) {
    this._staticNat = value;
  }
  public resetStaticNat() {
    this._staticNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatInput() {
    return this._staticNat
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute?: VpcRouterStaticRoute[];
  public get staticRoute() {
    return this.interpolationForAttribute('static_route') as any;
  }
  public set staticRoute(value: VpcRouterStaticRoute[] ) {
    this._staticRoute = value;
  }
  public resetStaticRoute() {
    this._staticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcRouterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VpcRouterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // user - computed: false, optional: true, required: false
  private _user?: VpcRouterUser[];
  public get user() {
    return this.interpolationForAttribute('user') as any;
  }
  public set user(value: VpcRouterUser[] ) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      icon_id: cdktf.stringToTerraform(this._iconId),
      internet_connection: cdktf.booleanToTerraform(this._internetConnection),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      syslog_host: cdktf.stringToTerraform(this._syslogHost),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      version: cdktf.numberToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
      dhcp_server: cdktf.listMapper(vpcRouterDhcpServerToTerraform)(this._dhcpServer),
      dhcp_static_mapping: cdktf.listMapper(vpcRouterDhcpStaticMappingToTerraform)(this._dhcpStaticMapping),
      firewall: cdktf.listMapper(vpcRouterFirewallToTerraform)(this._firewall),
      l2tp: cdktf.listMapper(vpcRouterL2TpToTerraform)(this._l2Tp),
      port_forwarding: cdktf.listMapper(vpcRouterPortForwardingToTerraform)(this._portForwarding),
      pptp: cdktf.listMapper(vpcRouterPptpToTerraform)(this._pptp),
      private_network_interface: cdktf.listMapper(vpcRouterPrivateNetworkInterfaceToTerraform)(this._privateNetworkInterface),
      public_network_interface: cdktf.listMapper(vpcRouterPublicNetworkInterfaceToTerraform)(this._publicNetworkInterface),
      site_to_site_vpn: cdktf.listMapper(vpcRouterSiteToSiteVpnToTerraform)(this._siteToSiteVpn),
      static_nat: cdktf.listMapper(vpcRouterStaticNatToTerraform)(this._staticNat),
      static_route: cdktf.listMapper(vpcRouterStaticRouteToTerraform)(this._staticRoute),
      timeouts: vpcRouterTimeoutsToTerraform(this._timeouts),
      user: cdktf.listMapper(vpcRouterUserToTerraform)(this._user),
    };
  }
}
