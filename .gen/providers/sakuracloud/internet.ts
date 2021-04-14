// https://www.terraform.io/docs/providers/sakuracloud/r/internet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InternetConfig extends cdktf.TerraformMetaArguments {
  /** The bandwidth of the network connected to the Internet in Mbps. `100`/`250`/`500`/`1000`/`1500`/`2000`/`2500`/`3000`/`3500`/`4000`/`4500`/`5000`/`5500`/`6000`/`6500`/`7000`/`7500`/`8000`/`8500`/`9000`/`9500`/`10000` */
  readonly bandWidth?: number;
  /** The description of the Switch+Router. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The flag to enable IPv6 */
  readonly enableIpv6?: boolean;
  /** The icon id to attach to the Switch+Router */
  readonly iconId?: string;
  /** The name of the Switch+Router. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The bit length of the subnet assigned to the Switch+Router. `26`/`27`/`28` */
  readonly netmask?: number;
  /** Any tags to assign to the Switch+Router */
  readonly tags?: string[];
  /** The name of zone that the Switch+Router will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: InternetTimeouts;
}
export interface InternetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function internetTimeoutsToTerraform(struct?: InternetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Internet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: InternetConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_internet',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bandWidth = config.bandWidth;
    this._description = config.description;
    this._enableIpv6 = config.enableIpv6;
    this._iconId = config.iconId;
    this._name = config.name;
    this._netmask = config.netmask;
    this._tags = config.tags;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // band_width - computed: false, optional: true, required: false
  private _bandWidth?: number;
  public get bandWidth() {
    return this.getNumberAttribute('band_width');
  }
  public set bandWidth(value: number ) {
    this._bandWidth = value;
  }
  public resetBandWidth() {
    this._bandWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandWidthInput() {
    return this._bandWidth
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

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean;
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean ) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
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

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ipv6_network_address - computed: true, optional: false, required: false
  public get ipv6NetworkAddress() {
    return this.getStringAttribute('ipv6_network_address');
  }

  // ipv6_prefix - computed: true, optional: false, required: false
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }

  // ipv6_prefix_len - computed: true, optional: false, required: false
  public get ipv6PrefixLen() {
    return this.getNumberAttribute('ipv6_prefix_len');
  }

  // max_ip_address - computed: true, optional: false, required: false
  public get maxIpAddress() {
    return this.getStringAttribute('max_ip_address');
  }

  // min_ip_address - computed: true, optional: false, required: false
  public get minIpAddress() {
    return this.getStringAttribute('min_ip_address');
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

  // netmask - computed: false, optional: true, required: false
  private _netmask?: number;
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }
  public set netmask(value: number ) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // server_ids - computed: true, optional: false, required: false
  public get serverIds() {
    return this.getListAttribute('server_ids');
  }

  // switch_id - computed: true, optional: false, required: false
  public get switchId() {
    return this.getStringAttribute('switch_id');
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
  private _timeouts?: InternetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: InternetTimeouts ) {
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
      band_width: cdktf.numberToTerraform(this._bandWidth),
      description: cdktf.stringToTerraform(this._description),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.numberToTerraform(this._netmask),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: internetTimeoutsToTerraform(this._timeouts),
    };
  }
}
