// https://www.terraform.io/docs/providers/sakuracloud/r/packet_filter_rules.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PacketFilterRulesConfig extends cdktf.TerraformMetaArguments {
  /** The id of the packet filter that set expressions to */
  readonly packetFilterId: string;
  /** The name of zone that the PacketFilter Rule will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** expression block */
  readonly expression?: PacketFilterRulesExpression[];
  /** timeouts block */
  readonly timeouts?: PacketFilterRulesTimeouts;
}
export interface PacketFilterRulesExpression {
  /** The flag to allow the packet through the filter */
  readonly allow?: boolean;
  /** The description of the expression */
  readonly description?: string;
  /** A destination port number or port range used for filtering (e.g. `1024`, `1024-2048`) */
  readonly destinationPort?: string;
  /** The protocol used for filtering. This must be one of [`http`/`https`/`tcp`/`udp`/`icmp`/`fragment`/`ip`] */
  readonly protocol: string;
  /** A source IP address or CIDR block used for filtering (e.g. `192.0.2.1`, `192.0.2.0/24`) */
  readonly sourceNetwork?: string;
  /** A source port number or port range used for filtering (e.g. `1024`, `1024-2048`) */
  readonly sourcePort?: string;
}

function packetFilterRulesExpressionToTerraform(struct?: PacketFilterRulesExpression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    description: cdktf.stringToTerraform(struct!.description),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_network: cdktf.stringToTerraform(struct!.sourceNetwork),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}

export interface PacketFilterRulesTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function packetFilterRulesTimeoutsToTerraform(struct?: PacketFilterRulesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class PacketFilterRules extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PacketFilterRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_packet_filter_rules',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._packetFilterId = config.packetFilterId;
    this._zone = config.zone;
    this._expression = config.expression;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // packet_filter_id - computed: false, optional: false, required: true
  private _packetFilterId: string;
  public get packetFilterId() {
    return this.getStringAttribute('packet_filter_id');
  }
  public set packetFilterId(value: string) {
    this._packetFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetFilterIdInput() {
    return this._packetFilterId
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

  // expression - computed: false, optional: true, required: false
  private _expression?: PacketFilterRulesExpression[];
  public get expression() {
    return this.interpolationForAttribute('expression') as any;
  }
  public set expression(value: PacketFilterRulesExpression[] ) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PacketFilterRulesTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PacketFilterRulesTimeouts ) {
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
      packet_filter_id: cdktf.stringToTerraform(this._packetFilterId),
      zone: cdktf.stringToTerraform(this._zone),
      expression: cdktf.listMapper(packetFilterRulesExpressionToTerraform)(this._expression),
      timeouts: packetFilterRulesTimeoutsToTerraform(this._timeouts),
    };
  }
}
