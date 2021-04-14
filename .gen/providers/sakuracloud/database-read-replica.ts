// https://www.terraform.io/docs/providers/sakuracloud/r/database_read_replica.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseReadReplicaConfig extends cdktf.TerraformMetaArguments {
  /** The description of the read-replica database. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the read-replica database */
  readonly iconId?: string;
  /** The id of the replication master database */
  readonly masterId: string;
  /** The name of the read-replica database. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** Any tags to assign to the read-replica database */
  readonly tags?: string[];
  /** The name of zone that the read-replica database will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** network_interface block */
  readonly networkInterface: DatabaseReadReplicaNetworkInterface[];
  /** timeouts block */
  readonly timeouts?: DatabaseReadReplicaTimeouts;
}
export interface DatabaseReadReplicaNetworkInterface {
  /** The IP address of the gateway used by read-replica database. If `gateway` isn't specified, it will be set to the same value of the master database */
  readonly gateway?: string;
  /** The IP address to assign to the read-replica database */
  readonly ipAddress: string;
  /** The bit length of the subnet to assign to the read-replica database. This must be in the range [`8`-`29`]. If `netmask` isn't specified, it will be set to the same value of the master database */
  readonly netmask?: number;
  /** The range of source IP addresses that allow to access to the read-replica database via network */
  readonly sourceRanges?: string[];
  /** The id of the switch to which the read-replica database connects. If `switch_id` isn't specified, it will be set to the same value of the master database */
  readonly switchId?: string;
}

function databaseReadReplicaNetworkInterfaceToTerraform(struct?: DatabaseReadReplicaNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    netmask: cdktf.numberToTerraform(struct!.netmask),
    source_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceRanges),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
  }
}

export interface DatabaseReadReplicaTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function databaseReadReplicaTimeoutsToTerraform(struct?: DatabaseReadReplicaTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DatabaseReadReplica extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseReadReplicaConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_database_read_replica',
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
    this._masterId = config.masterId;
    this._name = config.name;
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

  // master_id - computed: false, optional: false, required: true
  private _masterId: string;
  public get masterId() {
    return this.getStringAttribute('master_id');
  }
  public set masterId(value: string) {
    this._masterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIdInput() {
    return this._masterId
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
  private _networkInterface: DatabaseReadReplicaNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: DatabaseReadReplicaNetworkInterface[]) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseReadReplicaTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DatabaseReadReplicaTimeouts ) {
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
      master_id: cdktf.stringToTerraform(this._masterId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      network_interface: cdktf.listMapper(databaseReadReplicaNetworkInterfaceToTerraform)(this._networkInterface),
      timeouts: databaseReadReplicaTimeoutsToTerraform(this._timeouts),
    };
  }
}
