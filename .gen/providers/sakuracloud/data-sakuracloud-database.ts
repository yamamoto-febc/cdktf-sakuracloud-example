// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudDatabaseConfig extends cdktf.TerraformMetaArguments {
  /** The name of zone that the Database is in (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** filter block */
  readonly filter?: DataSakuracloudDatabaseFilter[];
}
export class DataSakuracloudDatabaseBackup extends cdktf.ComplexComputedList {

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // weekdays - computed: true, optional: false, required: false
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
}
export class DataSakuracloudDatabaseNetworkInterface extends cdktf.ComplexComputedList {

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // source_ranges - computed: true, optional: false, required: false
  public get sourceRanges() {
    return this.getListAttribute('source_ranges');
  }

  // switch_id - computed: true, optional: false, required: false
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
}
export interface DataSakuracloudDatabaseFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudDatabaseFilterConditionToTerraform(struct?: DataSakuracloudDatabaseFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudDatabaseFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudDatabaseFilterCondition[];
}

function dataSakuracloudDatabaseFilterToTerraform(struct?: DataSakuracloudDatabaseFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudDatabaseFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudDatabase extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudDatabaseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_database',
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

  // backup - computed: true, optional: false, required: false
  public backup(index: string) {
    return new DataSakuracloudDatabaseBackup(this, 'backup', index);
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
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

  // network_interface - computed: true, optional: false, required: false
  public networkInterface(index: string) {
    return new DataSakuracloudDatabaseNetworkInterface(this, 'network_interface', index);
  }

  // parameters - computed: true, optional: false, required: false
  public parameters(key: string): string {
    return new cdktf.StringMap(this, 'parameters').lookup(key);
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // replica_password - computed: true, optional: false, required: false
  public get replicaPassword() {
    return this.getStringAttribute('replica_password');
  }

  // replica_user - computed: true, optional: false, required: false
  public get replicaUser() {
    return this.getStringAttribute('replica_user');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
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
  private _filter?: DataSakuracloudDatabaseFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudDatabaseFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudDatabaseFilterToTerraform)(this._filter),
    };
  }
}
