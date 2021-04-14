// https://www.terraform.io/docs/providers/sakuracloud/r/database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /** The type of the database. This must be one of [`mariadb`/`postgres`] */
  readonly databaseType?: string;
  /** The description of the Database. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the Database */
  readonly iconId?: string;
  /** The name of the Database. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The map for setting RDBMS-specific parameters. Valid keys can be found with the `usacloud database list-parameters` command */
  readonly parameters?: { [key: string]: string };
  /** The password of default user on the database */
  readonly password: string;
  /** The plan name of the Database. This must be one of [`10g`/`30g`/`90g`/`240g`/`500g`/`1t`] */
  readonly plan?: string;
  /** The password of user that processing a replication */
  readonly replicaPassword?: string;
  /** The name of user that processing a replication */
  readonly replicaUser?: string;
  /** Any tags to assign to the Database */
  readonly tags?: string[];
  /** The name of default user on the database. The length of this value must be in the range [`3`-`20`] */
  readonly username: string;
  /** The name of zone that the Database will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** backup block */
  readonly backup?: DatabaseBackup[];
  /** network_interface block */
  readonly networkInterface: DatabaseNetworkInterface[];
  /** timeouts block */
  readonly timeouts?: DatabaseTimeouts;
}
export interface DatabaseBackup {
  /** The time to take backup. This must be formatted with `HH:mm` */
  readonly time?: string;
  /** A list of weekdays to backed up. The values in the list must be in [`sun`/`mon`/`tue`/`wed`/`thu`/`fri`/`sat`] */
  readonly weekdays?: string[];
}

function databaseBackupToTerraform(struct?: DatabaseBackup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    time: cdktf.stringToTerraform(struct!.time),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform)(struct!.weekdays),
  }
}

export interface DatabaseNetworkInterface {
  /** The IP address of the gateway used by Database */
  readonly gateway: string;
  /** The IP address to assign to the Database */
  readonly ipAddress: string;
  /** The bit length of the subnet to assign to the Database. This must be in the range [`8`-`29`] */
  readonly netmask: number;
  /** The number of the listening port. This must be in the range [`1024`-`65535`] */
  readonly port?: number;
  /** The range of source IP addresses that allow to access to the Database via network */
  readonly sourceRanges?: string[];
  /** The id of the switch to which the Database connects */
  readonly switchId: string;
}

function databaseNetworkInterfaceToTerraform(struct?: DatabaseNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    netmask: cdktf.numberToTerraform(struct!.netmask),
    port: cdktf.numberToTerraform(struct!.port),
    source_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceRanges),
    switch_id: cdktf.stringToTerraform(struct!.switchId),
  }
}

export interface DatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function databaseTimeoutsToTerraform(struct?: DatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Database extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
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
    this._databaseType = config.databaseType;
    this._description = config.description;
    this._iconId = config.iconId;
    this._name = config.name;
    this._parameters = config.parameters;
    this._password = config.password;
    this._plan = config.plan;
    this._replicaPassword = config.replicaPassword;
    this._replicaUser = config.replicaUser;
    this._tags = config.tags;
    this._username = config.username;
    this._zone = config.zone;
    this._backup = config.backup;
    this._networkInterface = config.networkInterface;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string;
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string ) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // icon_id - computed: false, optional: true, required: false
  private _iconId?: string;
  public get iconId() {
    return this.getStringAttribute('icon_id');
  }
  public set iconId(value: string ) {
    this._iconId = value;
  }
  public resetIconId() {
    this._iconId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconIdInput() {
    return this._iconId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // password - computed: false, optional: false, required: true
  private _password: string;
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: string;
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string ) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // replica_password - computed: false, optional: true, required: false
  private _replicaPassword?: string;
  public get replicaPassword() {
    return this.getStringAttribute('replica_password');
  }
  public set replicaPassword(value: string ) {
    this._replicaPassword = value;
  }
  public resetReplicaPassword() {
    this._replicaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaPasswordInput() {
    return this._replicaPassword
  }

  // replica_user - computed: false, optional: true, required: false
  private _replicaUser?: string;
  public get replicaUser() {
    return this.getStringAttribute('replica_user');
  }
  public set replicaUser(value: string ) {
    this._replicaUser = value;
  }
  public resetReplicaUser() {
    this._replicaUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaUserInput() {
    return this._replicaUser
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
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

  // backup - computed: false, optional: true, required: false
  private _backup?: DatabaseBackup[];
  public get backup() {
    return this.interpolationForAttribute('backup') as any;
  }
  public set backup(value: DatabaseBackup[] ) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface: DatabaseNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: DatabaseNetworkInterface[]) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DatabaseTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_type: cdktf.stringToTerraform(this._databaseType),
      description: cdktf.stringToTerraform(this._description),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      password: cdktf.stringToTerraform(this._password),
      plan: cdktf.stringToTerraform(this._plan),
      replica_password: cdktf.stringToTerraform(this._replicaPassword),
      replica_user: cdktf.stringToTerraform(this._replicaUser),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      username: cdktf.stringToTerraform(this._username),
      zone: cdktf.stringToTerraform(this._zone),
      backup: cdktf.listMapper(databaseBackupToTerraform)(this._backup),
      network_interface: cdktf.listMapper(databaseNetworkInterfaceToTerraform)(this._networkInterface),
      timeouts: databaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
