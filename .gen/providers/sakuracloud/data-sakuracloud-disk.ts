// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudDiskConfig extends cdktf.TerraformMetaArguments {
  /** The name of zone that the Disk is in (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** filter block */
  readonly filter?: DataSakuracloudDiskFilter[];
}
export interface DataSakuracloudDiskFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudDiskFilterConditionToTerraform(struct?: DataSakuracloudDiskFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudDiskFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudDiskFilterCondition[];
}

function dataSakuracloudDiskFilterToTerraform(struct?: DataSakuracloudDiskFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudDiskFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudDisk extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudDiskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_disk',
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

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
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

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // source_archive_id - computed: true, optional: false, required: false
  public get sourceArchiveId() {
    return this.getStringAttribute('source_archive_id');
  }

  // source_disk_id - computed: true, optional: false, required: false
  public get sourceDiskId() {
    return this.getStringAttribute('source_disk_id');
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
  private _filter?: DataSakuracloudDiskFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudDiskFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudDiskFilterToTerraform)(this._filter),
    };
  }
}
