// https://www.terraform.io/docs/providers/sakuracloud/r/auto_backup.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoBackupConfig extends cdktf.TerraformMetaArguments {
  /** The description of the AutoBackup. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The disk id to backed up */
  readonly diskId: string;
  /** The icon id to attach to the AutoBackup */
  readonly iconId?: string;
  /** The number backup files to keep. This must be in the range [`1`-`10`] */
  readonly maxBackupNum?: number;
  /** The name of the AutoBackup. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** Any tags to assign to the AutoBackup */
  readonly tags?: string[];
  /** A list of weekdays to backed up. The values in the list must be in [`sun`/`mon`/`tue`/`wed`/`thu`/`fri`/`sat`] */
  readonly weekdays: string[];
  /** The name of zone that the AutoBackup will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: AutoBackupTimeouts;
}
export interface AutoBackupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function autoBackupTimeoutsToTerraform(struct?: AutoBackupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AutoBackup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_auto_backup',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._diskId = config.diskId;
    this._iconId = config.iconId;
    this._maxBackupNum = config.maxBackupNum;
    this._name = config.name;
    this._tags = config.tags;
    this._weekdays = config.weekdays;
    this._zone = config.zone;
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

  // disk_id - computed: false, optional: false, required: true
  private _diskId: string;
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId
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

  // max_backup_num - computed: false, optional: true, required: false
  private _maxBackupNum?: number;
  public get maxBackupNum() {
    return this.getNumberAttribute('max_backup_num');
  }
  public set maxBackupNum(value: number ) {
    this._maxBackupNum = value;
  }
  public resetMaxBackupNum() {
    this._maxBackupNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackupNumInput() {
    return this._maxBackupNum
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

  // weekdays - computed: false, optional: false, required: true
  private _weekdays: string[];
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays
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
  private _timeouts?: AutoBackupTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutoBackupTimeouts ) {
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
      disk_id: cdktf.stringToTerraform(this._diskId),
      icon_id: cdktf.stringToTerraform(this._iconId),
      max_backup_num: cdktf.numberToTerraform(this._maxBackupNum),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      weekdays: cdktf.listMapper(cdktf.stringToTerraform)(this._weekdays),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: autoBackupTimeoutsToTerraform(this._timeouts),
    };
  }
}
