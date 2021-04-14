// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_load_balancer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /** The name of zone that the LoadBalancer is in (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** filter block */
  readonly filter?: DataSakuracloudLoadBalancerFilter[];
}
export class DataSakuracloudLoadBalancerNetworkInterface extends cdktf.ComplexComputedList {

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }

  // switch_id - computed: true, optional: false, required: false
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
}
export class DataSakuracloudLoadBalancerVipServer extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export class DataSakuracloudLoadBalancerVip extends cdktf.ComplexComputedList {

  // delay_loop - computed: true, optional: false, required: false
  public get delayLoop() {
    return this.getNumberAttribute('delay_loop');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.interpolationForAttribute('server') as any;
  }

  // sorry_server - computed: true, optional: false, required: false
  public get sorryServer() {
    return this.getStringAttribute('sorry_server');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }
}
export interface DataSakuracloudLoadBalancerFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudLoadBalancerFilterConditionToTerraform(struct?: DataSakuracloudLoadBalancerFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudLoadBalancerFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudLoadBalancerFilterCondition[];
}

function dataSakuracloudLoadBalancerFilterToTerraform(struct?: DataSakuracloudLoadBalancerFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudLoadBalancerFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudLoadBalancer extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudLoadBalancerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_load_balancer',
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
    return new DataSakuracloudLoadBalancerNetworkInterface(this, 'network_interface', index);
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // vip - computed: true, optional: false, required: false
  public vip(index: string) {
    return new DataSakuracloudLoadBalancerVip(this, 'vip', index);
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
  private _filter?: DataSakuracloudLoadBalancerFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudLoadBalancerFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudLoadBalancerFilterToTerraform)(this._filter),
    };
  }
}
