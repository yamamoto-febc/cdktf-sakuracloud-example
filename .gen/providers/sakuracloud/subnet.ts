// https://www.terraform.io/docs/providers/sakuracloud/r/subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /** The id of the switch+router resource that the subnet belongs */
  readonly internetId: string;
  /** The bit length of the subnet to assign to the Subnet. This must be in the range [`26`-`28`] */
  readonly netmask?: number;
  /** The ip address of the next-hop at the subnet */
  readonly nextHop: string;
  /** The name of zone that the Subnet will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: SubnetTimeouts;
}
export interface SubnetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function subnetTimeoutsToTerraform(struct?: SubnetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Subnet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_subnet',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._internetId = config.internetId;
    this._netmask = config.netmask;
    this._nextHop = config.nextHop;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_id - computed: false, optional: false, required: true
  private _internetId: string;
  public get internetId() {
    return this.getStringAttribute('internet_id');
  }
  public set internetId(value: string) {
    this._internetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internetIdInput() {
    return this._internetId
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // max_ip_address - computed: true, optional: false, required: false
  public get maxIpAddress() {
    return this.getStringAttribute('max_ip_address');
  }

  // min_ip_address - computed: true, optional: false, required: false
  public get minIpAddress() {
    return this.getStringAttribute('min_ip_address');
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

  // next_hop - computed: false, optional: false, required: true
  private _nextHop: string;
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop
  }

  // switch_id - computed: true, optional: false, required: false
  public get switchId() {
    return this.getStringAttribute('switch_id');
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
  private _timeouts?: SubnetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SubnetTimeouts ) {
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
      internet_id: cdktf.stringToTerraform(this._internetId),
      netmask: cdktf.numberToTerraform(this._netmask),
      next_hop: cdktf.stringToTerraform(this._nextHop),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: subnetTimeoutsToTerraform(this._timeouts),
    };
  }
}
