// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_esme.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudEsmeConfig extends cdktf.TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataSakuracloudEsmeFilter[];
}
export interface DataSakuracloudEsmeFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudEsmeFilterConditionToTerraform(struct?: DataSakuracloudEsmeFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudEsmeFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudEsmeFilterCondition[];
}

function dataSakuracloudEsmeFilterToTerraform(struct?: DataSakuracloudEsmeFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudEsmeFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudEsme extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudEsmeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_esme',
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

  // send_message_with_generated_otp_api_url - computed: true, optional: false, required: false
  public get sendMessageWithGeneratedOtpApiUrl() {
    return this.getStringAttribute('send_message_with_generated_otp_api_url');
  }

  // send_message_with_inputted_otp_api_url - computed: true, optional: false, required: false
  public get sendMessageWithInputtedOtpApiUrl() {
    return this.getStringAttribute('send_message_with_inputted_otp_api_url');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataSakuracloudEsmeFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudEsmeFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudEsmeFilterToTerraform)(this._filter),
    };
  }
}
