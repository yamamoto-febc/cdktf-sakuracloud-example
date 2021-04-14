// https://www.terraform.io/docs/providers/sakuracloud/r/packet_filter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PacketFilterConfig extends cdktf.TerraformMetaArguments {
  /** The description of the packetFilter. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The name of the packetFilter. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The name of zone that the packetFilter will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** expression block */
  readonly expression?: PacketFilterExpression[];
  /** timeouts block */
  readonly timeouts?: PacketFilterTimeouts;
}
export interface PacketFilterExpression {
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

function packetFilterExpressionToTerraform(struct?: PacketFilterExpression): any {
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

export interface PacketFilterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function packetFilterTimeoutsToTerraform(struct?: PacketFilterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PacketFilter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PacketFilterConfig) {
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
    this._description = config.description;
    this._name = config.name;
    this._zone = config.zone;
    this._expression = config.expression;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _expression?: PacketFilterExpression[];
  public get expression() {
    return this.interpolationForAttribute('expression') as any;
  }
  public set expression(value: PacketFilterExpression[] ) {
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
  private _timeouts?: PacketFilterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PacketFilterTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      zone: cdktf.stringToTerraform(this._zone),
      expression: cdktf.listMapper(packetFilterExpressionToTerraform)(this._expression),
      timeouts: packetFilterTimeoutsToTerraform(this._timeouts),
    };
  }
}
