// https://www.terraform.io/docs/providers/sakuracloud/r/server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /** The id of the CD-ROM to attach to the Server */
  readonly cdromId?: string;
  /** The policy of how to allocate virtual CPUs to the server. This must be one of [`standard`/`dedicatedcpu`] */
  readonly commitment?: string;
  /** The number of virtual CPUs */
  readonly core?: number;
  /** The description of the Server. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** A list of disk id connected to the server */
  readonly disks?: string[];
  /** The flag to use force shutdown when need to reboot/shutdown while applying */
  readonly forceShutdown?: boolean;
  /** The icon id to attach to the Server */
  readonly iconId?: string;
  /** The driver name of network interface. This must be one of [`virtio`/`e1000`] */
  readonly interfaceDriver?: string;
  /** The size of memory in GiB */
  readonly memory?: number;
  /** The name of the Server. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The id of the PrivateHost which the Server is assigned */
  readonly privateHostId?: string;
  /** Any tags to assign to the Server */
  readonly tags?: string[];
  /** The name of zone that the Server will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** disk_edit_parameter block */
  readonly diskEditParameter?: ServerDiskEditParameter[];
  /** network_interface block */
  readonly networkInterface?: ServerNetworkInterface[];
  /** timeouts block */
  readonly timeouts?: ServerTimeouts;
}
export interface ServerDiskEditParameterNote {
  /** The id of the API key to be injected into note when editing the disk */
  readonly apiKeyId?: string;
  /** The id of the note */
  readonly id: string;
  /** The value of the variable that be injected into note when editing the disk */
  readonly variables?: { [key: string]: string };
}

function serverDiskEditParameterNoteToTerraform(struct?: ServerDiskEditParameterNote): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_key_id: cdktf.stringToTerraform(struct!.apiKeyId),
    id: cdktf.stringToTerraform(struct!.id),
    variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.variables),
  }
}

export interface ServerDiskEditParameter {
  /** The flag to change partition uuid */
  readonly changePartitionUuid?: boolean;
  /** The flag to disable password authentication */
  readonly disablePwAuth?: boolean;
  /** The flag to enable DHCP client */
  readonly enableDhcp?: boolean;
  /** The gateway address used by the Server */
  readonly gateway?: string;
  /** The hostname of the Server. The length of this value must be in the range [`1`-`64`] */
  readonly hostname?: string;
  /** The IP address to assign to the Server */
  readonly ipAddress?: string;
  /** The bit length of the subnet to assign to the Server */
  readonly netmask?: number;
  /** A list of the Note id */
  readonly noteIds?: string[];
  /** The password of default user. The length of this value must be in the range [`8`-`64`] */
  readonly password?: string;
  /** A list of the SSHKey id */
  readonly sshKeyIds?: string[];
  /** A list of the SSHKey text */
  readonly sshKeys?: string[];
  /** note block */
  readonly note?: ServerDiskEditParameterNote[];
}

function serverDiskEditParameterToTerraform(struct?: ServerDiskEditParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    change_partition_uuid: cdktf.booleanToTerraform(struct!.changePartitionUuid),
    disable_pw_auth: cdktf.booleanToTerraform(struct!.disablePwAuth),
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    netmask: cdktf.numberToTerraform(struct!.netmask),
    note_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.noteIds),
    password: cdktf.stringToTerraform(struct!.password),
    ssh_key_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeyIds),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    note: cdktf.listMapper(serverDiskEditParameterNoteToTerraform)(struct!.note),
  }
}

export interface ServerNetworkInterface {
  /** The id of the packet filter to attach to the network interface */
  readonly packetFilterId?: string;
  /** The upstream type or upstream switch id. This must be one of [`shared`/`disconnect`/`<switch id>`] */
  readonly upstream: string;
  /** The IP address for only display. This value doesn't affect actual NIC settings */
  readonly userIpAddress?: string;
}

function serverNetworkInterfaceToTerraform(struct?: ServerNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    packet_filter_id: cdktf.stringToTerraform(struct!.packetFilterId),
    upstream: cdktf.stringToTerraform(struct!.upstream),
    user_ip_address: cdktf.stringToTerraform(struct!.userIpAddress),
  }
}

export interface ServerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function serverTimeoutsToTerraform(struct?: ServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Server extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_server',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cdromId = config.cdromId;
    this._commitment = config.commitment;
    this._core = config.core;
    this._description = config.description;
    this._disks = config.disks;
    this._forceShutdown = config.forceShutdown;
    this._iconId = config.iconId;
    this._interfaceDriver = config.interfaceDriver;
    this._memory = config.memory;
    this._name = config.name;
    this._privateHostId = config.privateHostId;
    this._tags = config.tags;
    this._zone = config.zone;
    this._diskEditParameter = config.diskEditParameter;
    this._networkInterface = config.networkInterface;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdrom_id - computed: false, optional: true, required: false
  private _cdromId?: string;
  public get cdromId() {
    return this.getStringAttribute('cdrom_id');
  }
  public set cdromId(value: string ) {
    this._cdromId = value;
  }
  public resetCdromId() {
    this._cdromId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdromIdInput() {
    return this._cdromId
  }

  // commitment - computed: false, optional: true, required: false
  private _commitment?: string;
  public get commitment() {
    return this.getStringAttribute('commitment');
  }
  public set commitment(value: string ) {
    this._commitment = value;
  }
  public resetCommitment() {
    this._commitment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitmentInput() {
    return this._commitment
  }

  // core - computed: false, optional: true, required: false
  private _core?: number;
  public get core() {
    return this.getNumberAttribute('core');
  }
  public set core(value: number ) {
    this._core = value;
  }
  public resetCore() {
    this._core = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInput() {
    return this._core
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

  // disks - computed: false, optional: true, required: false
  private _disks?: string[];
  public get disks() {
    return this.getListAttribute('disks');
  }
  public set disks(value: string[] ) {
    this._disks = value;
  }
  public resetDisks() {
    this._disks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // force_shutdown - computed: false, optional: true, required: false
  private _forceShutdown?: boolean;
  public get forceShutdown() {
    return this.getBooleanAttribute('force_shutdown');
  }
  public set forceShutdown(value: boolean ) {
    this._forceShutdown = value;
  }
  public resetForceShutdown() {
    this._forceShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceShutdownInput() {
    return this._forceShutdown
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // interface_driver - computed: false, optional: true, required: false
  private _interfaceDriver?: string;
  public get interfaceDriver() {
    return this.getStringAttribute('interface_driver');
  }
  public set interfaceDriver(value: string ) {
    this._interfaceDriver = value;
  }
  public resetInterfaceDriver() {
    this._interfaceDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDriverInput() {
    return this._interfaceDriver
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number;
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number ) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory
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

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // private_host_id - computed: false, optional: true, required: false
  private _privateHostId?: string;
  public get privateHostId() {
    return this.getStringAttribute('private_host_id');
  }
  public set privateHostId(value: string ) {
    this._privateHostId = value;
  }
  public resetPrivateHostId() {
    this._privateHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateHostIdInput() {
    return this._privateHostId
  }

  // private_host_name - computed: true, optional: false, required: false
  public get privateHostName() {
    return this.getStringAttribute('private_host_name');
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

  // disk_edit_parameter - computed: false, optional: true, required: false
  private _diskEditParameter?: ServerDiskEditParameter[];
  public get diskEditParameter() {
    return this.interpolationForAttribute('disk_edit_parameter') as any;
  }
  public set diskEditParameter(value: ServerDiskEditParameter[] ) {
    this._diskEditParameter = value;
  }
  public resetDiskEditParameter() {
    this._diskEditParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEditParameterInput() {
    return this._diskEditParameter
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface?: ServerNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: ServerNetworkInterface[] ) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServerTimeouts ) {
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
      cdrom_id: cdktf.stringToTerraform(this._cdromId),
      commitment: cdktf.stringToTerraform(this._commitment),
      core: cdktf.numberToTerraform(this._core),
      description: cdktf.stringToTerraform(this._description),
      disks: cdktf.listMapper(cdktf.stringToTerraform)(this._disks),
      force_shutdown: cdktf.booleanToTerraform(this._forceShutdown),
      icon_id: cdktf.stringToTerraform(this._iconId),
      interface_driver: cdktf.stringToTerraform(this._interfaceDriver),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      private_host_id: cdktf.stringToTerraform(this._privateHostId),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      disk_edit_parameter: cdktf.listMapper(serverDiskEditParameterToTerraform)(this._diskEditParameter),
      network_interface: cdktf.listMapper(serverNetworkInterfaceToTerraform)(this._networkInterface),
      timeouts: serverTimeoutsToTerraform(this._timeouts),
    };
  }
}
