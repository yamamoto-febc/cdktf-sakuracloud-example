// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_subnet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudSubnetConfig extends cdktf.TerraformMetaArguments {
  /** The index of the subnet in assigned to the Switch+Router */
  readonly index: number;
  /** The id of the switch+router resource that the Subnet belongs */
  readonly internetId: string;
  /** The name of zone that the Subnet is in (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
}

// Resource

export class DataSakuracloudSubnet extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudSubnetConfig) {
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
    this._index = config.index;
    this._internetId = config.internetId;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index - computed: false, optional: false, required: true
  private _index: number;
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index
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

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      index: cdktf.numberToTerraform(this._index),
      internet_id: cdktf.stringToTerraform(this._internetId),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }
}
