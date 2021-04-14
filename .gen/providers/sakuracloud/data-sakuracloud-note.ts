// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_note.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudNoteConfig extends cdktf.TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataSakuracloudNoteFilter[];
}
export interface DataSakuracloudNoteFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudNoteFilterConditionToTerraform(struct?: DataSakuracloudNoteFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudNoteFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudNoteFilterCondition[];
}

function dataSakuracloudNoteFilterToTerraform(struct?: DataSakuracloudNoteFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudNoteFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudNote extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudNoteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_note',
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

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataSakuracloudNoteFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudNoteFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudNoteFilterToTerraform)(this._filter),
    };
  }
}
