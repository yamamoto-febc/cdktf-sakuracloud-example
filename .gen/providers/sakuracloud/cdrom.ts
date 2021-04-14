// https://www.terraform.io/docs/providers/sakuracloud/r/cdrom.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdromConfig extends cdktf.TerraformMetaArguments {
  /** The content to upload to as the CD-ROM. This conflicts with [`iso_image_file`] */
  readonly content?: string;
  /** The name of content file to upload to as the CD-ROM. This is only used when `content` is specified. This conflicts with [`iso_image_file`] */
  readonly contentFileName?: string;
  /** The description of the CD-ROM. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The md5 checksum calculated from the base64 encoded file body */
  readonly hash?: string;
  /** The icon id to attach to the CD-ROM */
  readonly iconId?: string;
  /** The file path to upload to as the CD-ROM. This conflicts with [`content`] */
  readonly isoImageFile?: string;
  /** The name of the CD-ROM. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The size of CD-ROM in GiB. This must be one of [`5`/`10`] */
  readonly size?: number;
  /** Any tags to assign to the CD-ROM */
  readonly tags?: string[];
  /** The name of zone that the CD-ROM will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: CdromTimeouts;
}
export interface CdromTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cdromTimeoutsToTerraform(struct?: CdromTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Cdrom extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CdromConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_cdrom',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._content = config.content;
    this._contentFileName = config.contentFileName;
    this._description = config.description;
    this._hash = config.hash;
    this._iconId = config.iconId;
    this._isoImageFile = config.isoImageFile;
    this._name = config.name;
    this._size = config.size;
    this._tags = config.tags;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: true, required: false
  private _content?: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string ) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // content_file_name - computed: false, optional: true, required: false
  private _contentFileName?: string;
  public get contentFileName() {
    return this.getStringAttribute('content_file_name');
  }
  public set contentFileName(value: string ) {
    this._contentFileName = value;
  }
  public resetContentFileName() {
    this._contentFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFileNameInput() {
    return this._contentFileName
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

  // iso_image_file - computed: false, optional: true, required: false
  private _isoImageFile?: string;
  public get isoImageFile() {
    return this.getStringAttribute('iso_image_file');
  }
  public set isoImageFile(value: string ) {
    this._isoImageFile = value;
  }
  public resetIsoImageFile() {
    this._isoImageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoImageFileInput() {
    return this._isoImageFile
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
  private _timeouts?: CdromTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CdromTimeouts ) {
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
      content: cdktf.stringToTerraform(this._content),
      content_file_name: cdktf.stringToTerraform(this._contentFileName),
      description: cdktf.stringToTerraform(this._description),
      hash: cdktf.stringToTerraform(this._hash),
      icon_id: cdktf.stringToTerraform(this._iconId),
      iso_image_file: cdktf.stringToTerraform(this._isoImageFile),
      name: cdktf.stringToTerraform(this._name),
      size: cdktf.numberToTerraform(this._size),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: cdromTimeoutsToTerraform(this._timeouts),
    };
  }
}
