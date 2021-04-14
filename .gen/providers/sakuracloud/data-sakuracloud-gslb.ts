// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_gslb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudGslbConfig extends cdktf.TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataSakuracloudGslbFilter[];
}
export class DataSakuracloudGslbHealthCheck extends cdktf.ComplexComputedList {

  // delay_loop - computed: true, optional: false, required: false
  public get delayLoop() {
    return this.getNumberAttribute('delay_loop');
  }

  // host_header - computed: true, optional: false, required: false
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
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
export class DataSakuracloudGslbServer extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataSakuracloudGslbFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudGslbFilterConditionToTerraform(struct?: DataSakuracloudGslbFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudGslbFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudGslbFilterCondition[];
}

function dataSakuracloudGslbFilterToTerraform(struct?: DataSakuracloudGslbFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudGslbFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudGslb extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudGslbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_gslb',
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // health_check - computed: true, optional: false, required: false
  public healthCheck(index: string) {
    return new DataSakuracloudGslbHealthCheck(this, 'health_check', index);
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

  // server - computed: true, optional: false, required: false
  public server(index: string) {
    return new DataSakuracloudGslbServer(this, 'server', index);
  }

  // sorry_server - computed: true, optional: false, required: false
  public get sorryServer() {
    return this.getStringAttribute('sorry_server');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // weighted - computed: true, optional: false, required: false
  public get weighted() {
    return this.getBooleanAttribute('weighted');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataSakuracloudGslbFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudGslbFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudGslbFilterToTerraform)(this._filter),
    };
  }
}
