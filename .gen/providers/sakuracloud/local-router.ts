// https://www.terraform.io/docs/providers/sakuracloud/r/local_router.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalRouterConfig extends cdktf.TerraformMetaArguments {
  /** The description of the LocalRouter. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the LocalRouter */
  readonly iconId?: string;
  /** The name of the LocalRouter. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** Any tags to assign to the LocalRouter */
  readonly tags?: string[];
  /** network_interface block */
  readonly networkInterface: LocalRouterNetworkInterface[];
  /** peer block */
  readonly peer?: LocalRouterPeer[];
  /** static_route block */
  readonly staticRoute?: LocalRouterStaticRoute[];
  /** switch block */
  readonly switch: LocalRouterSwitch[];
  /** timeouts block */
  readonly timeouts?: LocalRouterTimeouts;
}
export interface LocalRouterNetworkInterface {
  /** A list of IP address to assign to the LocalRouter.  */
  readonly ipAddresses: string[];
  /** The bit length of the subnet assigned to the LocalRouter. This must be in the range [`8`-`29`] */
  readonly netmask: number;
  /** The virtual IP address */
  readonly vip: string;
  /** The Virtual Router Identifier */
  readonly vrid: number;
}

function localRouterNetworkInterfaceToTerraform(struct?: LocalRouterNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
    netmask: cdktf.numberToTerraform(struct!.netmask),
    vip: cdktf.stringToTerraform(struct!.vip),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}

export interface LocalRouterPeer {
  /** The description of the LocalRouter. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The flag to enable the LocalRouter */
  readonly enabled?: boolean;
  /** The ID of the peer LocalRouter */
  readonly peerId: string;
  /** The secret key of the peer LocalRouter */
  readonly secretKey: string;
}

function localRouterPeerToTerraform(struct?: LocalRouterPeer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    peer_id: cdktf.stringToTerraform(struct!.peerId),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}

export interface LocalRouterStaticRoute {
  /** The IP address of the next hop */
  readonly nextHop: string;
  /** The CIDR block of destination */
  readonly prefix: string;
}

function localRouterStaticRouteToTerraform(struct?: LocalRouterStaticRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface LocalRouterSwitch {
  /** The category name of connected services (e.g. `cloud`, `vps`) */
  readonly category?: string;
  /** The resource ID of the Switch */
  readonly code: string;
  /** The id of the Zone */
  readonly zoneId: string;
}

function localRouterSwitchToTerraform(struct?: LocalRouterSwitch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    code: cdktf.stringToTerraform(struct!.code),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}

export interface LocalRouterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function localRouterTimeoutsToTerraform(struct?: LocalRouterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class LocalRouter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LocalRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_local_router',
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
    this._name = config.name;
    this._tags = config.tags;
    this._networkInterface = config.networkInterface;
    this._peer = config.peer;
    this._staticRoute = config.staticRoute;
    this._switch = config.switch;
    this._timeouts = config.timeouts;
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

  // secret_keys - computed: true, optional: false, required: false
  public get secretKeys() {
    return this.getListAttribute('secret_keys');
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

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface: LocalRouterNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: LocalRouterNetworkInterface[]) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: LocalRouterPeer[];
  public get peer() {
    return this.interpolationForAttribute('peer') as any;
  }
  public set peer(value: LocalRouterPeer[] ) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute?: LocalRouterStaticRoute[];
  public get staticRoute() {
    return this.interpolationForAttribute('static_route') as any;
  }
  public set staticRoute(value: LocalRouterStaticRoute[] ) {
    this._staticRoute = value;
  }
  public resetStaticRoute() {
    this._staticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute
  }

  // switch - computed: false, optional: false, required: true
  private _switch: LocalRouterSwitch[];
  public get switch() {
    return this.interpolationForAttribute('switch') as any;
  }
  public set switch(value: LocalRouterSwitch[]) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LocalRouterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LocalRouterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      network_interface: cdktf.listMapper(localRouterNetworkInterfaceToTerraform)(this._networkInterface),
      peer: cdktf.listMapper(localRouterPeerToTerraform)(this._peer),
      static_route: cdktf.listMapper(localRouterStaticRouteToTerraform)(this._staticRoute),
      switch: cdktf.listMapper(localRouterSwitchToTerraform)(this._switch),
      timeouts: localRouterTimeoutsToTerraform(this._timeouts),
    };
  }
}
