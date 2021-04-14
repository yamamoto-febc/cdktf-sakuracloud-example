// https://www.terraform.io/docs/providers/sakuracloud/r/gslb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbConfig extends cdktf.TerraformMetaArguments {
  /** The description of the GSLB. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the GSLB */
  readonly iconId?: string;
  /** The name of the GSLB. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The IP address of the SorryServer. This will be used when all servers are down */
  readonly sorryServer?: string;
  /** Any tags to assign to the GSLB */
  readonly tags?: string[];
  /** The flag to enable weighted load-balancing */
  readonly weighted?: boolean;
  /** health_check block */
  readonly healthCheck: GslbHealthCheck[];
  /** server block */
  readonly server?: GslbServer[];
  /** timeouts block */
  readonly timeouts?: GslbTimeouts;
}
export interface GslbHealthCheck {
  /** The interval in seconds between checks. This must be in the range [`10`-`60`] */
  readonly delayLoop?: number;
  /** The value of host header send when checking by HTTP/HTTPS */
  readonly hostHeader?: string;
  /** The path used when checking by HTTP/HTTPS */
  readonly path?: string;
  /** The port number used when checking by TCP */
  readonly port?: number;
  /** The protocol used for health checks. This must be one of [`http`/`https`/`tcp`/`ping`] */
  readonly protocol: string;
  /** The response-code to expect when checking by HTTP/HTTPS */
  readonly status?: string;
}

function gslbHealthCheckToTerraform(struct?: GslbHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delay_loop: cdktf.numberToTerraform(struct!.delayLoop),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export interface GslbServer {
  /** The flag to enable as destination of load balancing */
  readonly enabled?: boolean;
  /** The IP address of the server */
  readonly ipAddress: string;
  /** The weight used when weighted load balancing is enabled. This must be in the range [`1`-`10000`] */
  readonly weight?: number;
}

function gslbServerToTerraform(struct?: GslbServer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface GslbTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function gslbTimeoutsToTerraform(struct?: GslbTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Gslb extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GslbConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_gslb',
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
    this._name = config.name;
    this._sorryServer = config.sorryServer;
    this._tags = config.tags;
    this._weighted = config.weighted;
    this._healthCheck = config.healthCheck;
    this._server = config.server;
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // sorry_server - computed: false, optional: true, required: false
  private _sorryServer?: string;
  public get sorryServer() {
    return this.getStringAttribute('sorry_server');
  }
  public set sorryServer(value: string ) {
    this._sorryServer = value;
  }
  public resetSorryServer() {
    this._sorryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sorryServerInput() {
    return this._sorryServer
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

  // weighted - computed: false, optional: true, required: false
  private _weighted?: boolean;
  public get weighted() {
    return this.getBooleanAttribute('weighted');
  }
  public set weighted(value: boolean ) {
    this._weighted = value;
  }
  public resetWeighted() {
    this._weighted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedInput() {
    return this._weighted
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck: GslbHealthCheck[];
  public get healthCheck() {
    return this.interpolationForAttribute('health_check') as any;
  }
  public set healthCheck(value: GslbHealthCheck[]) {
    this._healthCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck
  }

  // server - computed: false, optional: true, required: false
  private _server?: GslbServer[];
  public get server() {
    return this.interpolationForAttribute('server') as any;
  }
  public set server(value: GslbServer[] ) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GslbTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GslbTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      sorry_server: cdktf.stringToTerraform(this._sorryServer),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      weighted: cdktf.booleanToTerraform(this._weighted),
      health_check: cdktf.listMapper(gslbHealthCheckToTerraform)(this._healthCheck),
      server: cdktf.listMapper(gslbServerToTerraform)(this._server),
      timeouts: gslbTimeoutsToTerraform(this._timeouts),
    };
  }
}
