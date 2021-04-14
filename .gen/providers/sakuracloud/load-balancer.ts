// https://www.terraform.io/docs/providers/sakuracloud/r/load_balancer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /** The description of the LoadBalancer. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the LoadBalancer */
  readonly iconId?: string;
  /** The name of the LoadBalancer. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The plan name of the LoadBalancer. This must be one of [`standard`/`highspec`] */
  readonly plan?: string;
  /** Any tags to assign to the LoadBalancer */
  readonly tags?: string[];
  /** The name of zone that the LoadBalancer will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** network_interface block */
  readonly networkInterface: LoadBalancerNetworkInterface[];
  /** timeouts block */
  readonly timeouts?: LoadBalancerTimeouts;
  /** vip block */
  readonly vip?: LoadBalancerVip[];
}
export interface LoadBalancerNetworkInterface {
  /** The IP address of the gateway used by LoadBalancer */
  readonly gateway?: string;
  /** A list of IP address to assign to the LoadBalancer.  */
  readonly ipAddresses: string[];
  /** The bit length of the subnet assigned to the LoadBalancer. This must be in the range [`8`-`29`] */
  readonly netmask: number;
  /** The id of the switch to which the LoadBalancer connects */
  readonly switchId: string;
  /** The Virtual Router Identifier */
  readonly vrid: number;
}

function loadBalancerNetworkInterfaceToTerraform(struct?: LoadBalancerNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
    netmask: cdktf.numberToTerraform(struct!.netmask),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}

export interface LoadBalancerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function loadBalancerTimeoutsToTerraform(struct?: LoadBalancerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface LoadBalancerVipServer {
  /** The flag to enable as destination of load balancing */
  readonly enabled?: boolean;
  /** The IP address of the destination server */
  readonly ipAddress: string;
  /** The path used when checking by HTTP/HTTPS */
  readonly path?: string;
  /** The protocol used for health checks. This must be one of [`http`/`https`/`tcp`/`ping`] */
  readonly protocol: string;
  /** The response code to expect when checking by HTTP/HTTPS */
  readonly status?: string;
}

function loadBalancerVipServerToTerraform(struct?: LoadBalancerVipServer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export interface LoadBalancerVip {
  /** The interval in seconds between checks. This must be in the range [`10`-`2147483647`] */
  readonly delayLoop?: number;
  /** The description of the VIP. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The target port number for load-balancing. This must be in the range [`1`-`65535`] */
  readonly port: number;
  /** The IP address of the SorryServer. This will be used when all servers under this VIP are down */
  readonly sorryServer?: string;
  /** The virtual IP address */
  readonly vip: string;
  /** server block */
  readonly server?: LoadBalancerVipServer[];
}

function loadBalancerVipToTerraform(struct?: LoadBalancerVip): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delay_loop: cdktf.numberToTerraform(struct!.delayLoop),
    description: cdktf.stringToTerraform(struct!.description),
    port: cdktf.numberToTerraform(struct!.port),
    sorry_server: cdktf.stringToTerraform(struct!.sorryServer),
    vip: cdktf.stringToTerraform(struct!.vip),
    server: cdktf.listMapper(loadBalancerVipServerToTerraform)(struct!.server),
  }
}


// Resource

export class LoadBalancer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_load_balancer',
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
    this._plan = config.plan;
    this._tags = config.tags;
    this._zone = config.zone;
    this._networkInterface = config.networkInterface;
    this._timeouts = config.timeouts;
    this._vip = config.vip;
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

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface: LoadBalancerNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: LoadBalancerNetworkInterface[]) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoadBalancerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LoadBalancerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vip - computed: false, optional: true, required: false
  private _vip?: LoadBalancerVip[];
  public get vip() {
    return this.interpolationForAttribute('vip') as any;
  }
  public set vip(value: LoadBalancerVip[] ) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      network_interface: cdktf.listMapper(loadBalancerNetworkInterfaceToTerraform)(this._networkInterface),
      timeouts: loadBalancerTimeoutsToTerraform(this._timeouts),
      vip: cdktf.listMapper(loadBalancerVipToTerraform)(this._vip),
    };
  }
}
