// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_icon.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudIconConfig extends cdktf.TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataSakuracloudIconFilter[];
}
export interface DataSakuracloudIconFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudIconFilterConditionToTerraform(struct?: DataSakuracloudIconFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudIconFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudIconFilterCondition[];
}

function dataSakuracloudIconFilterToTerraform(struct?: DataSakuracloudIconFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudIconFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudIcon extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudIconConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_icon',
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataSakuracloudIconFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudIconFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudIconFilterToTerraform)(this._filter),
    };
  }
}
