// https://www.terraform.io/docs/providers/sakuracloud/r/disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskConfig extends cdktf.TerraformMetaArguments {
  /** The name of the disk connector. This must be one of [`virtio`/`ide`] */
  readonly connector?: string;
  /** The description of the disk. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** A list of disk id. The disk will be located to different storage from these disks */
  readonly distantFrom?: string[];
  /** The icon id to attach to the disk */
  readonly iconId?: string;
  /** The name of the disk. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The plan name of the disk. This must be one of [`ssd`/`hdd`] */
  readonly plan?: string;
  /** The size of disk in GiB */
  readonly size?: number;
  /** The id of the source archive. This conflicts with [`source_disk_id`] */
  readonly sourceArchiveId?: string;
  /** The id of the source disk. This conflicts with [`source_archive_id`] */
  readonly sourceDiskId?: string;
  /** Any tags to assign to the disk */
  readonly tags?: string[];
  /** The name of zone that the disk will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: DiskTimeouts;
}
export interface DiskTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function diskTimeoutsToTerraform(struct?: DiskTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Disk extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DiskConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_disk',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._connector = config.connector;
    this._description = config.description;
    this._distantFrom = config.distantFrom;
    this._iconId = config.iconId;
    this._name = config.name;
    this._plan = config.plan;
    this._size = config.size;
    this._sourceArchiveId = config.sourceArchiveId;
    this._sourceDiskId = config.sourceDiskId;
    this._tags = config.tags;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector - computed: false, optional: true, required: false
  private _connector?: string;
  public get connector() {
    return this.getStringAttribute('connector');
  }
  public set connector(value: string ) {
    this._connector = value;
  }
  public resetConnector() {
    this._connector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector
  }

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

  // distant_from - computed: false, optional: true, required: false
  private _distantFrom?: string[];
  public get distantFrom() {
    return this.getListAttribute('distant_from');
  }
  public set distantFrom(value: string[] ) {
    this._distantFrom = value;
  }
  public resetDistantFrom() {
    this._distantFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distantFromInput() {
    return this._distantFrom
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

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
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

  // source_archive_id - computed: false, optional: true, required: false
  private _sourceArchiveId?: string;
  public get sourceArchiveId() {
    return this.getStringAttribute('source_archive_id');
  }
  public set sourceArchiveId(value: string ) {
    this._sourceArchiveId = value;
  }
  public resetSourceArchiveId() {
    this._sourceArchiveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveIdInput() {
    return this._sourceArchiveId
  }

  // source_disk_id - computed: false, optional: true, required: false
  private _sourceDiskId?: string;
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
  }
  public set sourceDiskId(value: string ) {
    this._sourceDiskId = value;
  }
  public resetSourceDiskId() {
    this._sourceDiskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskIdInput() {
    return this._sourceDiskId
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DiskTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DiskTimeouts ) {
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
      connector: cdktf.stringToTerraform(this._connector),
      description: cdktf.stringToTerraform(this._description),
      distant_from: cdktf.listMapper(cdktf.stringToTerraform)(this._distantFrom),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      size: cdktf.numberToTerraform(this._size),
      source_archive_id: cdktf.stringToTerraform(this._sourceArchiveId),
      source_disk_id: cdktf.stringToTerraform(this._sourceDiskId),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: diskTimeoutsToTerraform(this._timeouts),
    };
  }
}
