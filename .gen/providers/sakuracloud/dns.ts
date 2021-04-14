// https://www.terraform.io/docs/providers/sakuracloud/r/dns.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsConfig extends cdktf.TerraformMetaArguments {
  /** The description of the DNS. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the DNS */
  readonly iconId?: string;
  /** Any tags to assign to the DNS */
  readonly tags?: string[];
  /** The target zone. (e.g. `example.com`) */
  readonly zone: string;
  /** record block */
  readonly record?: DnsRecord[];
  /** timeouts block */
  readonly timeouts?: DnsTimeouts;
}
export interface DnsRecord {
  /** The name of the DNS Record. The length of this value must be in the range [`1`-`64`] */
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
}

function dnsRecordToTerraform(struct?: DnsRecord): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface DnsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dnsTimeoutsToTerraform(struct?: DnsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Dns extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_dns',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._iconId = config.iconId;
    this._tags = config.tags;
    this._zone = config.zone;
    this._record = config.record;
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

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
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

  // zone - computed: false, optional: false, required: true
  private _zone: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // record - computed: false, optional: true, required: false
  private _record?: DnsRecord[];
  public get record() {
    return this.interpolationForAttribute('record') as any;
  }
  public set record(value: DnsRecord[] ) {
    this._record = value;
  }
  public resetRecord() {
    this._record = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DnsTimeouts ) {
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
      icon_id: cdktf.stringToTerraform(this._iconId),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      record: cdktf.listMapper(dnsRecordToTerraform)(this._record),
      timeouts: dnsTimeoutsToTerraform(this._timeouts),
    };
  }
}
