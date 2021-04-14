// https://www.terraform.io/docs/providers/sakuracloud/r/mobile_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileGatewayConfig extends cdktf.TerraformMetaArguments {
  /** The description of the MobileGateway. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** A list of IP address used by each connected devices */
  readonly dnsServers: string[];
  /** The icon id to attach to the MobileGateway */
  readonly iconId?: string;
  /** The flag to allow communication between each connected devices */
  readonly interDeviceCommunication?: boolean;
  /** The flag to enable connect to the Internet */
  readonly internetConnection?: boolean;
  /** The name of the MobileGateway. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** Any tags to assign to the MobileGateway */
  readonly tags?: string[];
  /** The name of zone that the MobileGateway will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** private_network_interface block */
  readonly privateNetworkInterface?: MobileGatewayPrivateNetworkInterface[];
  /** sim block */
  readonly sim?: MobileGatewaySim[];
  /** sim_route block */
  readonly simRoute?: MobileGatewaySimRoute[];
  /** static_route block */
  readonly staticRoute?: MobileGatewayStaticRoute[];
  /** timeouts block */
  readonly timeouts?: MobileGatewayTimeouts;
  /** traffic_control block */
  readonly trafficControl?: MobileGatewayTrafficControl[];
}
export interface MobileGatewayPrivateNetworkInterface {
  /** The IP address to assign to the MobileGateway */
  readonly ipAddress: string;
  /** The bit length of the subnet to assign to the MobileGateway. This must be in the range [`8`-`29`] */
  readonly netmask: number;
  /** The id of the switch to which the MobileGateway connects */
  readonly switchId: string;
}

function mobileGatewayPrivateNetworkInterfaceToTerraform(struct?: MobileGatewayPrivateNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    netmask: cdktf.numberToTerraform(struct!.netmask),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
  }
}

export interface MobileGatewaySim {
  /** The IP address to assign to the SIM */
  readonly ipAddress: string;
  /** The id of the Switch connected to the MobileGateway */
  readonly simId: string;
}

function mobileGatewaySimToTerraform(struct?: MobileGatewaySim): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    sim_id: cdktf.stringToTerraform(struct!.simId),
  }
}

export interface MobileGatewaySimRoute {
  /** The destination network prefix used by the sim routing. This must be specified by CIDR block formatted string */
  readonly prefix: string;
  /** The id of the routing destination SIM */
  readonly simId: string;
}

function mobileGatewaySimRouteToTerraform(struct?: MobileGatewaySimRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    sim_id: cdktf.stringToTerraform(struct!.simId),
  }
}

export interface MobileGatewayStaticRoute {
  /** The IP address of next hop */
  readonly nextHop: string;
  /** The destination network prefix used by static routing. This must be specified by CIDR block formatted string */
  readonly prefix: string;
}

function mobileGatewayStaticRouteToTerraform(struct?: MobileGatewayStaticRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface MobileGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function mobileGatewayTimeoutsToTerraform(struct?: MobileGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface MobileGatewayTrafficControl {
  /** The flag to enable the traffic shaping */
  readonly autoTrafficShaping?: boolean;
  /** The bandwidth allowed when the traffic shaping is enabled */
  readonly bandWidthLimit?: number;
  /** The flag to enable email notification when the traffic shaping is enabled */
  readonly enableEmail?: boolean;
  /** The flag to enable slack notification when the traffic shaping is enabled */
  readonly enableSlack?: boolean;
  /** The threshold of monthly traffic usage to enable to the traffic shaping */
  readonly quota: number;
  /** The webhook URL used when sends notification. It will only used when `enable_slack` is set `true` */
  readonly slackWebhook?: string;
}

function mobileGatewayTrafficControlToTerraform(struct?: MobileGatewayTrafficControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_traffic_shaping: cdktf.booleanToTerraform(struct!.autoTrafficShaping),
    band_width_limit: cdktf.numberToTerraform(struct!.bandWidthLimit),
    enable_email: cdktf.booleanToTerraform(struct!.enableEmail),
    enable_slack: cdktf.booleanToTerraform(struct!.enableSlack),
    quota: cdktf.numberToTerraform(struct!.quota),
    slack_webhook: cdktf.stringToTerraform(struct!.slackWebhook),
  }
}


// Resource

export class MobileGateway extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MobileGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_mobile_gateway',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._dnsServers = config.dnsServers;
    this._iconId = config.iconId;
    this._interDeviceCommunication = config.interDeviceCommunication;
    this._internetConnection = config.internetConnection;
    this._name = config.name;
    this._tags = config.tags;
    this._zone = config.zone;
    this._privateNetworkInterface = config.privateNetworkInterface;
    this._sim = config.sim;
    this._simRoute = config.simRoute;
    this._staticRoute = config.staticRoute;
    this._timeouts = config.timeouts;
    this._trafficControl = config.trafficControl;
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

  // dns_servers - computed: false, optional: false, required: true
  private _dnsServers: string[];
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers
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

  // inter_device_communication - computed: false, optional: true, required: false
  private _interDeviceCommunication?: boolean;
  public get interDeviceCommunication() {
    return this.getBooleanAttribute('inter_device_communication');
  }
  public set interDeviceCommunication(value: boolean ) {
    this._interDeviceCommunication = value;
  }
  public resetInterDeviceCommunication() {
    this._interDeviceCommunication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interDeviceCommunicationInput() {
    return this._interDeviceCommunication
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

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_netmask - computed: true, optional: false, required: false
  public get publicNetmask() {
    return this.getNumberAttribute('public_netmask');
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

  // private_network_interface - computed: false, optional: true, required: false
  private _privateNetworkInterface?: MobileGatewayPrivateNetworkInterface[];
  public get privateNetworkInterface() {
    return this.interpolationForAttribute('private_network_interface') as any;
  }
  public set privateNetworkInterface(value: MobileGatewayPrivateNetworkInterface[] ) {
    this._privateNetworkInterface = value;
  }
  public resetPrivateNetworkInterface() {
    this._privateNetworkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkInterfaceInput() {
    return this._privateNetworkInterface
  }

  // sim - computed: false, optional: true, required: false
  private _sim?: MobileGatewaySim[];
  public get sim() {
    return this.interpolationForAttribute('sim') as any;
  }
  public set sim(value: MobileGatewaySim[] ) {
    this._sim = value;
  }
  public resetSim() {
    this._sim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simInput() {
    return this._sim
  }

  // sim_route - computed: false, optional: true, required: false
  private _simRoute?: MobileGatewaySimRoute[];
  public get simRoute() {
    return this.interpolationForAttribute('sim_route') as any;
  }
  public set simRoute(value: MobileGatewaySimRoute[] ) {
    this._simRoute = value;
  }
  public resetSimRoute() {
    this._simRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simRouteInput() {
    return this._simRoute
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute?: MobileGatewayStaticRoute[];
  public get staticRoute() {
    return this.interpolationForAttribute('static_route') as any;
  }
  public set staticRoute(value: MobileGatewayStaticRoute[] ) {
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
  private _timeouts?: MobileGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MobileGatewayTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // traffic_control - computed: false, optional: true, required: false
  private _trafficControl?: MobileGatewayTrafficControl[];
  public get trafficControl() {
    return this.interpolationForAttribute('traffic_control') as any;
  }
  public set trafficControl(value: MobileGatewayTrafficControl[] ) {
    this._trafficControl = value;
  }
  public resetTrafficControl() {
    this._trafficControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficControlInput() {
    return this._trafficControl
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsServers),
      icon_id: cdktf.stringToTerraform(this._iconId),
      inter_device_communication: cdktf.booleanToTerraform(this._interDeviceCommunication),
      internet_connection: cdktf.booleanToTerraform(this._internetConnection),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      private_network_interface: cdktf.listMapper(mobileGatewayPrivateNetworkInterfaceToTerraform)(this._privateNetworkInterface),
      sim: cdktf.listMapper(mobileGatewaySimToTerraform)(this._sim),
      sim_route: cdktf.listMapper(mobileGatewaySimRouteToTerraform)(this._simRoute),
      static_route: cdktf.listMapper(mobileGatewayStaticRouteToTerraform)(this._staticRoute),
      timeouts: mobileGatewayTimeoutsToTerraform(this._timeouts),
      traffic_control: cdktf.listMapper(mobileGatewayTrafficControlToTerraform)(this._trafficControl),
    };
  }
}
