// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_archive.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudArchiveConfig extends cdktf.TerraformMetaArguments {
  /** The criteria used to filter SakuraCloud archives. This must be one of following:  
`centos`/`centos8stream`/`centos8`/`centos7`/`ubuntu`/`ubuntu2004`/`ubuntu1804`/`ubuntu1604`/`debian`/`debian10`/`debian9`/`coreos`/`rancheros`/`k3os`/`kusanagi`/`freebsd`/`windows2016`/`windows2016-rds`/`windows2016-rds-office`/`windows2016-sql-web`/`windows2016-sql-standard`/`windows2016-sql-standard-all`/`windows2016-sql2017-standard`/`windows2016-sql2017-enterprise`/`windows2016-sql2017-standard-all`/`windows2019`/`windows2019-rds`/`windows2019-rds-office2019`/`windows2019-sql2017-web`/`windows2019-sql2019-web`/`windows2019-sql2017-standard`/`windows2019-sql2019-standard`/`windows2019-sql2017-enterprise`/`windows2019-sql2019-enterprise`/`windows2019-sql2017-standard-all`/`windows2019-sql2019-standard-all` */
  readonly osType?: string;
  /** The name of zone that the Archive is in (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** filter block */
  readonly filter?: DataSakuracloudArchiveFilter[];
}
export interface DataSakuracloudArchiveFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudArchiveFilterConditionToTerraform(struct?: DataSakuracloudArchiveFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudArchiveFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudArchiveFilterCondition[];
}

function dataSakuracloudArchiveFilterToTerraform(struct?: DataSakuracloudArchiveFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudArchiveFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudArchive extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudArchiveConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_archive',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._osType = config.osType;
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

  // os_type - computed: false, optional: true, required: false
  private _osType?: string;
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string ) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
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
  private _filter?: DataSakuracloudArchiveFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudArchiveFilter[] ) {
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
      os_type: cdktf.stringToTerraform(this._osType),
      zone: cdktf.stringToTerraform(this._zone),
      filter: cdktf.listMapper(dataSakuracloudArchiveFilterToTerraform)(this._filter),
    };
  }
}
