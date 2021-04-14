// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_local_router.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudLocalRouterConfig extends cdktf.TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataSakuracloudLocalRouterFilter[];
}
export class DataSakuracloudLocalRouterNetworkInterface extends cdktf.ComplexComputedList {

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
}
export class DataSakuracloudLocalRouterPeer extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}
export class DataSakuracloudLocalRouterStaticRoute extends cdktf.ComplexComputedList {

  // next_hop - computed: true, optional: false, required: false
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}
export class DataSakuracloudLocalRouterSwitch extends cdktf.ComplexComputedList {

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}
export interface DataSakuracloudLocalRouterFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudLocalRouterFilterConditionToTerraform(struct?: DataSakuracloudLocalRouterFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudLocalRouterFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudLocalRouterFilterCondition[];
}

function dataSakuracloudLocalRouterFilterToTerraform(struct?: DataSakuracloudLocalRouterFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudLocalRouterFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudLocalRouter extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudLocalRouterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_local_router',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // icon_id - computed: true, optional: false, required: false
  public get iconId() {
    return this.getStringAttribute('icon_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_interface - computed: true, optional: false, required: false
  public networkInterface(index: string) {
    return new DataSakuracloudLocalRouterNetworkInterface(this, 'network_interface', index);
  }

  // peer - computed: true, optional: false, required: false
  public peer(index: string) {
    return new DataSakuracloudLocalRouterPeer(this, 'peer', index);
  }

  // secret_keys - computed: true, optional: false, required: false
  public get secretKeys() {
    return this.getListAttribute('secret_keys');
  }

  // static_route - computed: true, optional: false, required: false
  public staticRoute(index: string) {
    return new DataSakuracloudLocalRouterStaticRoute(this, 'static_route', index);
  }

  // switch - computed: true, optional: false, required: false
  public switch(index: string) {
    return new DataSakuracloudLocalRouterSwitch(this, 'switch', index);
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataSakuracloudLocalRouterFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudLocalRouterFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudLocalRouterFilterToTerraform)(this._filter),
    };
  }
}
