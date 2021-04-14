// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_internet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudInternetConfig extends cdktf.TerraformMetaArguments {
  /** The name of zone that the Switch+Router is in (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** filter block */
  readonly filter?: DataSakuracloudInternetFilter[];
}
export interface DataSakuracloudInternetFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudInternetFilterConditionToTerraform(struct?: DataSakuracloudInternetFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudInternetFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudInternetFilterCondition[];
}

function dataSakuracloudInternetFilterToTerraform(struct?: DataSakuracloudInternetFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudInternetFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudInternet extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudInternetConfig = {}) {
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
    this._zone = config.zone;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // band_width - computed: true, optional: false, required: false
  public get bandWidth() {
    return this.getNumberAttribute('band_width');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_ipv6 - computed: true, optional: false, required: false
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // icon_id - computed: true, optional: false, required: false
  public get iconId() {
    return this.getStringAttribute('icon_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getNumberAttribute('netmask');
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataSakuracloudInternetFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudInternetFilter[] ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      zone: cdktf.stringToTerraform(this._zone),
      filter: cdktf.listMapper(dataSakuracloudInternetFilterToTerraform)(this._filter),
    };
  }
}
