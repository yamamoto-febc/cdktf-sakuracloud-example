// https://www.terraform.io/docs/providers/sakuracloud/r/private_host.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateHostConfig extends cdktf.TerraformMetaArguments {
  /** The class of the PrivateHost. This will be one of [`dynamic`/`ms_windows`] */
  readonly class?: string;
  /** The description of the PrivateHost. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the PrivateHost */
  readonly iconId?: string;
  /** The name of the PrivateHost. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** Any tags to assign to the PrivateHost */
  readonly tags?: string[];
  /** The name of zone that the PrivateHost will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: PrivateHostTimeouts;
}
export interface PrivateHostTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function privateHostTimeoutsToTerraform(struct?: PrivateHostTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PrivateHost extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PrivateHostConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_private_host',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._class = config.class;
    this._description = config.description;
    this._iconId = config.iconId;
    this._name = config.name;
    this._tags = config.tags;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_core - computed: true, optional: false, required: false
  public get assignedCore() {
    return this.getNumberAttribute('assigned_core');
  }

  // assigned_memory - computed: true, optional: false, required: false
  public get assignedMemory() {
    return this.getNumberAttribute('assigned_memory');
  }

  // class - computed: false, optional: true, required: false
  private _class?: string;
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string ) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class
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

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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
  private _timeouts?: PrivateHostTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PrivateHostTimeouts ) {
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
      class: cdktf.stringToTerraform(this._class),
      description: cdktf.stringToTerraform(this._description),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: privateHostTimeoutsToTerraform(this._timeouts),
    };
  }
}
