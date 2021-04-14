// https://www.terraform.io/docs/providers/sakuracloud/r/ipv4_ptr.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4PtrConfig extends cdktf.TerraformMetaArguments {
  /** The value of the PTR record. This must be FQDN */
  readonly hostname: string;
  /** The IP address to which the PTR record is set */
  readonly ipAddress: string;
  /** The wait interval(in seconds) for retrying API call used when SakuraCloud API returns any errors */
  readonly retryInterval?: number;
  /** The maximum number of API call retries used when SakuraCloud API returns any errors */
  readonly retryMax?: number;
  /** The name of zone that the IPv4 PTR will be created (e.g. `is1a`, `tk1a`) */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: Ipv4PtrTimeouts;
}
export interface Ipv4PtrTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function ipv4PtrTimeoutsToTerraform(struct?: Ipv4PtrTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Ipv4Ptr extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Ipv4PtrConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_ipv4_ptr',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostname = config.hostname;
    this._ipAddress = config.ipAddress;
    this._retryInterval = config.retryInterval;
    this._retryMax = config.retryMax;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: false, optional: false, required: true
  private _hostname: string;
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress: string;
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number;
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number ) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval
  }

  // retry_max - computed: false, optional: true, required: false
  private _retryMax?: number;
  public get retryMax() {
    return this.getNumberAttribute('retry_max');
  }
  public set retryMax(value: number ) {
    this._retryMax = value;
  }
  public resetRetryMax() {
    this._retryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxInput() {
    return this._retryMax
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Ipv4PtrTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Ipv4PtrTimeouts ) {
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
      hostname: cdktf.stringToTerraform(this._hostname),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      retry_max: cdktf.numberToTerraform(this._retryMax),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: ipv4PtrTimeoutsToTerraform(this._timeouts),
    };
  }
}
