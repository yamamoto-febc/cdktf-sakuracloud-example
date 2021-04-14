// https://www.terraform.io/docs/providers/sakuracloud/r/dns_record_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordAConfig extends cdktf.TerraformMetaArguments {
  /** The id of the DNS resource */
  readonly dnsId: string;
  /** The name of the DNS Record resource */
  readonly name: string;
  /** The number of port. This must be in the range [`1`-`65535`] */
  readonly port?: number;
  /** The priority of target DNS Record. This must be in the range [`0`-`65535`] */
  readonly priority?: number;
  /** The number of the TTL */
  readonly ttl?: number;
  /** The type of DNS Record. This must be one of [`A`/`AAAA`/`ALIAS`/`CNAME`/`NS`/`MX`/`TXT`/`SRV`/`CAA`/`PTR`] */
  readonly type: string;
  /** The value of the DNS Record */
  readonly value: string;
  /** The weight of target DNS Record. This must be in the range [`0`-`65535`] */
  readonly weight?: number;
  /** timeouts block */
  readonly timeouts?: DnsRecordTimeouts;
}
export interface DnsRecordTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function dnsRecordTimeoutsToTerraform(struct?: DnsRecordTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class DnsRecordA extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsRecordAConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_dns_record',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsId = config.dnsId;
    this._name = config.name;
    this._port = config.port;
    this._priority = config.priority;
    this._ttl = config.ttl;
    this._type = config.type;
    this._value = config.value;
    this._weight = config.weight;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_id - computed: false, optional: false, required: true
  private _dnsId: string;
  public get dnsId() {
    return this.getStringAttribute('dns_id');
  }
  public set dnsId(value: string) {
    this._dnsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIdInput() {
    return this._dnsId
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

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number ) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number;
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number ) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number;
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number ) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsRecordTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DnsRecordTimeouts ) {
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
      dns_id: cdktf.stringToTerraform(this._dnsId),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
      weight: cdktf.numberToTerraform(this._weight),
      timeouts: dnsRecordTimeoutsToTerraform(this._timeouts),
    };
  }
}
