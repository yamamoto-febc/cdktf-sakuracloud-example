// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudServerConfig extends cdktf.TerraformMetaArguments {
  /** The name of zone that the Server is in (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** filter block */
  readonly filter?: DataSakuracloudServerFilter[];
}
export class DataSakuracloudServerNetworkInterface extends cdktf.ComplexComputedList {

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // packet_filter_id - computed: true, optional: false, required: false
  public get packetFilterId() {
    return this.getStringAttribute('packet_filter_id');
  }

  // upstream - computed: true, optional: false, required: false
  public get upstream() {
    return this.getStringAttribute('upstream');
  }

  // user_ip_address - computed: true, optional: false, required: false
  public get userIpAddress() {
    return this.getStringAttribute('user_ip_address');
  }
}
export interface DataSakuracloudServerFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudServerFilterConditionToTerraform(struct?: DataSakuracloudServerFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudServerFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudServerFilterCondition[];
}

function dataSakuracloudServerFilterToTerraform(struct?: DataSakuracloudServerFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudServerFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudServer extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudServerConfig = {}) {
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
    this._zone = config.zone;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdrom_id - computed: true, optional: false, required: false
  public get cdromId() {
    return this.getStringAttribute('cdrom_id');
  }

  // commitment - computed: true, optional: false, required: false
  public get commitment() {
    return this.getStringAttribute('commitment');
  }

  // core - computed: true, optional: false, required: false
  public get core() {
    return this.getNumberAttribute('core');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disks - computed: true, optional: false, required: false
  public get disks() {
    return this.getListAttribute('disks');
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // icon_id - computed: true, optional: false, required: false
  public get iconId() {
    return this.getStringAttribute('icon_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_driver - computed: true, optional: false, required: false
  public get interfaceDriver() {
    return this.getStringAttribute('interface_driver');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }

  // network_address - computed: true, optional: false, required: false
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }

  // network_interface - computed: true, optional: false, required: false
  public networkInterface(index: string) {
    return new DataSakuracloudServerNetworkInterface(this, 'network_interface', index);
  }

  // private_host_id - computed: true, optional: false, required: false
  public get privateHostId() {
    return this.getStringAttribute('private_host_id');
  }

  // private_host_name - computed: true, optional: false, required: false
  public get privateHostName() {
    return this.getStringAttribute('private_host_name');
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
  private _filter?: DataSakuracloudServerFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudServerFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudServerFilterToTerraform)(this._filter),
    };
  }
}
