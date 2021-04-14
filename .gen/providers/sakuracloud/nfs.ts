// https://www.terraform.io/docs/providers/sakuracloud/r/nfs.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfsConfig extends cdktf.TerraformMetaArguments {
  /** The description of the NFS. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the NFS */
  readonly iconId?: string;
  /** The name of the NFS. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The plan name of the NFS. This must be one of [`hdd`/`ssd`] */
  readonly plan?: string;
  /** The size of NFS in GiB */
  readonly size?: number;
  /** Any tags to assign to the NFS */
  readonly tags?: string[];
  /** The name of zone that the NFS will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** network_interface block */
  readonly networkInterface: NfsNetworkInterface[];
  /** timeouts block */
  readonly timeouts?: NfsTimeouts;
}
export interface NfsNetworkInterface {
  /** The IP address of the gateway used by NFS */
  readonly gateway?: string;
  /** The IP address to assign to the NFS */
  readonly ipAddress: string;
  /** The bit length of the subnet to assign to the NFS. This must be in the range [`8`-`29`] */
  readonly netmask: number;
  /** The id of the switch to which the NFS connects */
  readonly switchId: string;
}

function nfsNetworkInterfaceToTerraform(struct?: NfsNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    netmask: cdktf.numberToTerraform(struct!.netmask),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
  }
}

export interface NfsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function nfsTimeoutsToTerraform(struct?: NfsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Nfs extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NfsConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_nfs',
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
    this._size = config.size;
    this._tags = config.tags;
    this._zone = config.zone;
    this._networkInterface = config.networkInterface;
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

  // size - computed: false, optional: true, required: false
  private _size?: number;
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number ) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
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
  private _networkInterface: NfsNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: NfsNetworkInterface[]) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NfsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NfsTimeouts ) {
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
      plan: cdktf.stringToTerraform(this._plan),
      size: cdktf.numberToTerraform(this._size),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      network_interface: cdktf.listMapper(nfsNetworkInterfaceToTerraform)(this._networkInterface),
      timeouts: nfsTimeoutsToTerraform(this._timeouts),
    };
  }
}
