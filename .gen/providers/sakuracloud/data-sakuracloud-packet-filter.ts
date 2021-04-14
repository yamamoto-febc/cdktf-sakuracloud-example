// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_packet_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudPacketFilterConfig extends cdktf.TerraformMetaArguments {
  /** The name of zone that the PacketFilter is in (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** filter block */
  readonly filter?: DataSakuracloudPacketFilterFilter[];
}
export class DataSakuracloudPacketFilterExpression extends cdktf.ComplexComputedList {

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getBooleanAttribute('allow');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_network - computed: true, optional: false, required: false
  public get sourceNetwork() {
    return this.getStringAttribute('source_network');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
}
export interface DataSakuracloudPacketFilterFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudPacketFilterFilterConditionToTerraform(struct?: DataSakuracloudPacketFilterFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudPacketFilterFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudPacketFilterFilterCondition[];
}

function dataSakuracloudPacketFilterFilterToTerraform(struct?: DataSakuracloudPacketFilterFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    condition: cdktf.listMapper(dataSakuracloudPacketFilterFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudPacketFilter extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudPacketFilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_packet_filter',
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expression - computed: true, optional: false, required: false
  public expression(index: string) {
    return new DataSakuracloudPacketFilterExpression(this, 'expression', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
  private _filter?: DataSakuracloudPacketFilterFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudPacketFilterFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudPacketFilterFilterToTerraform)(this._filter),
    };
  }
}
