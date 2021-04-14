// https://www.terraform.io/docs/providers/sakuracloud/r/archive.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchiveConfig extends cdktf.TerraformMetaArguments {
  /** The file path to upload to the SakuraCloud */
  readonly archiveFile?: string;
  /** The description of the archive. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The md5 checksum calculated from the base64 encoded file body */
  readonly hash?: string;
  /** The icon id to attach to the archive */
  readonly iconId?: string;
  /** The name of the archive. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The size of archive in GiB. This must be one of [`20`/`40`/`60`/`80`/`100`/`250`/`500`/`750`/`1024`] */
  readonly size?: number;
  /** The id of the source archive. This conflicts with [`source_disk_id`] */
  readonly sourceArchiveId?: string;
  /** The share key of source shared archive */
  readonly sourceArchiveZone?: string;
  /** The id of the source disk. This conflicts with [`source_archive_id`] */
  readonly sourceDiskId?: string;
  /** The share key of source shared archive */
  readonly sourceSharedKey?: string;
  /** Any tags to assign to the archive */
  readonly tags?: string[];
  /** The name of zone that the archive will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: ArchiveTimeouts;
}
export interface ArchiveTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function archiveTimeoutsToTerraform(struct?: ArchiveTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Archive extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ArchiveConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_archive',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._archiveFile = config.archiveFile;
    this._description = config.description;
    this._hash = config.hash;
    this._iconId = config.iconId;
    this._name = config.name;
    this._size = config.size;
    this._sourceArchiveId = config.sourceArchiveId;
    this._sourceArchiveZone = config.sourceArchiveZone;
    this._sourceDiskId = config.sourceDiskId;
    this._sourceSharedKey = config.sourceSharedKey;
    this._tags = config.tags;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_file - computed: false, optional: true, required: false
  private _archiveFile?: string;
  public get archiveFile() {
    return this.getStringAttribute('archive_file');
  }
  public set archiveFile(value: string ) {
    this._archiveFile = value;
  }
  public resetArchiveFile() {
    this._archiveFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveFileInput() {
    return this._archiveFile
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

  // hash - computed: true, optional: true, required: false
  private _hash?: string;
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash
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

  // source_archive_zone - computed: false, optional: true, required: false
  private _sourceArchiveZone?: string;
  public get sourceArchiveZone() {
    return this.getStringAttribute('source_archive_zone');
  }
  public set sourceArchiveZone(value: string ) {
    this._sourceArchiveZone = value;
  }
  public resetSourceArchiveZone() {
    this._sourceArchiveZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveZoneInput() {
    return this._sourceArchiveZone
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

  // source_shared_key - computed: false, optional: true, required: false
  private _sourceSharedKey?: string;
  public get sourceSharedKey() {
    return this.getStringAttribute('source_shared_key');
  }
  public set sourceSharedKey(value: string ) {
    this._sourceSharedKey = value;
  }
  public resetSourceSharedKey() {
    this._sourceSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSharedKeyInput() {
    return this._sourceSharedKey
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
  private _timeouts?: ArchiveTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ArchiveTimeouts ) {
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
      archive_file: cdktf.stringToTerraform(this._archiveFile),
      description: cdktf.stringToTerraform(this._description),
      hash: cdktf.stringToTerraform(this._hash),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      size: cdktf.numberToTerraform(this._size),
      source_archive_id: cdktf.stringToTerraform(this._sourceArchiveId),
      source_archive_zone: cdktf.stringToTerraform(this._sourceArchiveZone),
      source_disk_id: cdktf.stringToTerraform(this._sourceDiskId),
      source_shared_key: cdktf.stringToTerraform(this._sourceSharedKey),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: archiveTimeoutsToTerraform(this._timeouts),
    };
  }
}
