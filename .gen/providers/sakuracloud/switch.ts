// https://www.terraform.io/docs/providers/sakuracloud/r/switch.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchConfig extends cdktf.TerraformMetaArguments {
  /** The bridge id attached to the Switch */
  readonly bridgeId?: string;
  /** The description of the Switch. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the Switch */
  readonly iconId?: string;
  /** The name of the Switch. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** Any tags to assign to the Switch */
  readonly tags?: string[];
  /** The name of zone that the Switch will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: SwitchTimeouts;
}
export interface SwitchTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function switchTimeoutsToTerraform(struct?: SwitchTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Switch extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SwitchConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_switch',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bridgeId = config.bridgeId;
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

  // bridge_id - computed: false, optional: true, required: false
  private _bridgeId?: string;
  public get bridgeId() {
    return this.getStringAttribute('bridge_id');
  }
  public set bridgeId(value: string ) {
    this._bridgeId = value;
  }
  public resetBridgeId() {
    this._bridgeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeIdInput() {
    return this._bridgeId
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

  // server_ids - computed: true, optional: false, required: false
  public get serverIds() {
    return this.getListAttribute('server_ids');
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
  private _timeouts?: SwitchTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SwitchTimeouts ) {
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
      bridge_id: cdktf.stringToTerraform(this._bridgeId),
      description: cdktf.stringToTerraform(this._description),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: switchTimeoutsToTerraform(this._timeouts),
    };
  }
}
