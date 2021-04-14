// https://www.terraform.io/docs/providers/sakuracloud/r/sim.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SimConfig extends cdktf.TerraformMetaArguments {
  /** A list of a communication company. Each element must be one of `kddi`/`docomo`/`softbank` */
  readonly carrier: string[];
  /** The description of the SIM. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The flag to enable the SIM */
  readonly enabled?: boolean;
  /** ICCID(Integrated Circuit Card ID) assigned to the SIM */
  readonly iccid: string;
  /** The icon id to attach to the SIM */
  readonly iconId?: string;
  /** The id of the device to restrict devices that can use the SIM */
  readonly imei?: string;
  /** The name of the SIM. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The passcord to authenticate the SIM */
  readonly passcode: string;
  /** Any tags to assign to the SIM */
  readonly tags?: string[];
  /** timeouts block */
  readonly timeouts?: SimTimeouts;
}
export interface SimTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function simTimeoutsToTerraform(struct?: SimTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Sim extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SimConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_sim',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._carrier = config.carrier;
    this._description = config.description;
    this._enabled = config.enabled;
    this._iccid = config.iccid;
    this._iconId = config.iconId;
    this._imei = config.imei;
    this._name = config.name;
    this._passcode = config.passcode;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // carrier - computed: false, optional: false, required: true
  private _carrier: string[];
  public get carrier() {
    return this.getListAttribute('carrier');
  }
  public set carrier(value: string[]) {
    this._carrier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierInput() {
    return this._carrier
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // iccid - computed: false, optional: false, required: true
  private _iccid: string;
  public get iccid() {
    return this.getStringAttribute('iccid');
  }
  public set iccid(value: string) {
    this._iccid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iccidInput() {
    return this._iccid
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

  // imei - computed: false, optional: true, required: false
  private _imei?: string;
  public get imei() {
    return this.getStringAttribute('imei');
  }
  public set imei(value: string ) {
    this._imei = value;
  }
  public resetImei() {
    this._imei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiInput() {
    return this._imei
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mobile_gateway_id - computed: true, optional: false, required: false
  public get mobileGatewayId() {
    return this.getStringAttribute('mobile_gateway_id');
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

  // passcode - computed: false, optional: false, required: true
  private _passcode: string;
  public get passcode() {
    return this.getStringAttribute('passcode');
  }
  public set passcode(value: string) {
    this._passcode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeInput() {
    return this._passcode
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SimTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SimTimeouts ) {
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
      carrier: cdktf.listMapper(cdktf.stringToTerraform)(this._carrier),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      iccid: cdktf.stringToTerraform(this._iccid),
      icon_id: cdktf.stringToTerraform(this._iconId),
      imei: cdktf.stringToTerraform(this._imei),
      name: cdktf.stringToTerraform(this._name),
      passcode: cdktf.stringToTerraform(this._passcode),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: simTimeoutsToTerraform(this._timeouts),
    };
  }
}
