// https://www.terraform.io/docs/providers/sakuracloud/r/proxylb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProxylbConfig extends cdktf.TerraformMetaArguments {
  /** The description of the ProxyLB. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The flag to enable gzip compression */
  readonly gzip?: boolean;
  /** The icon id to attach to the ProxyLB */
  readonly iconId?: string;
  /** The name of the ProxyLB. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The plan name of the ProxyLB. This must be one of [`100`/`500`/`1000`/`5000`/`10000`/`50000`/`100000`] */
  readonly plan?: number;
  /** The name of region that the proxy LB is in. This must be one of [`tk1`/`is1`/`anycast`] */
  readonly region?: string;
  /** The flag to enable sticky session */
  readonly stickySession?: boolean;
  /** Any tags to assign to the ProxyLB */
  readonly tags?: string[];
  /** The timeout duration in seconds */
  readonly timeout?: number;
  /** The flag to enable VIP fail-over */
  readonly vipFailover?: boolean;
  /** bind_port block */
  readonly bindPort: ProxylbBindPort[];
  /** certificate block */
  readonly certificate?: ProxylbCertificate[];
  /** health_check block */
  readonly healthCheck: ProxylbHealthCheck[];
  /** rule block */
  readonly rule?: ProxylbRule[];
  /** server block */
  readonly server?: ProxylbServer[];
  /** sorry_server block */
  readonly sorryServer?: ProxylbSorryServer[];
  /** timeouts block */
  readonly timeouts?: ProxylbTimeouts;
}
export interface ProxylbBindPortResponseHeader {
  /** The field name of HTTP header added to response by the ProxyLB */
  readonly header: string;
  /** The field value of HTTP header added to response by the ProxyLB */
  readonly value: string;
}

function proxylbBindPortResponseHeaderToTerraform(struct?: ProxylbBindPortResponseHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ProxylbBindPort {
  /** The number of listening port */
  readonly port?: number;
  /** The proxy mode. This must be one of [`http`/`https`/`tcp`] */
  readonly proxyMode: string;
  /** The flag to enable redirection from http to https. This flag is used only when `proxy_mode` is `http` */
  readonly redirectToHttps?: boolean;
  /** The flag to enable HTTP/2. This flag is used only when `proxy_mode` is `https` */
  readonly supportHttp2?: boolean;
  /** response_header block */
  readonly responseHeader?: ProxylbBindPortResponseHeader[];
}

function proxylbBindPortToTerraform(struct?: ProxylbBindPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    proxy_mode: cdktf.stringToTerraform(struct!.proxyMode),
    redirect_to_https: cdktf.booleanToTerraform(struct!.redirectToHttps),
    support_http2: cdktf.booleanToTerraform(struct!.supportHttp2),
    response_header: cdktf.listMapper(proxylbBindPortResponseHeaderToTerraform)(struct!.responseHeader),
  }
}

export interface ProxylbCertificateAdditionalCertificate {
  /** The intermediate certificate for a server */
  readonly intermediateCert?: string;
  /** The private key for a server */
  readonly privateKey: string;
  /** The certificate for a server */
  readonly serverCert: string;
}

function proxylbCertificateAdditionalCertificateToTerraform(struct?: ProxylbCertificateAdditionalCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    intermediate_cert: cdktf.stringToTerraform(struct!.intermediateCert),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    server_cert: cdktf.stringToTerraform(struct!.serverCert),
  }
}

export interface ProxylbCertificate {
  /** The intermediate certificate for a server */
  readonly intermediateCert?: string;
  /** The private key for a server */
  readonly privateKey?: string;
  /** The certificate for a server */
  readonly serverCert?: string;
  /** additional_certificate block */
  readonly additionalCertificate?: ProxylbCertificateAdditionalCertificate[];
}

function proxylbCertificateToTerraform(struct?: ProxylbCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    intermediate_cert: cdktf.stringToTerraform(struct!.intermediateCert),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    server_cert: cdktf.stringToTerraform(struct!.serverCert),
    additional_certificate: cdktf.listMapper(proxylbCertificateAdditionalCertificateToTerraform)(struct!.additionalCertificate),
  }
}

export interface ProxylbHealthCheck {
  /** The interval in seconds between checks. This must be in the range [`10`-`60`] */
  readonly delayLoop?: number;
  /** The value of host header send when checking by HTTP */
  readonly hostHeader?: string;
  /** The path used when checking by HTTP */
  readonly path?: string;
  /** The port number used when checking by TCP */
  readonly port?: number;
  /** The protocol used for health checks. This must be one of [`http`/`tcp`] */
  readonly protocol: string;
}

function proxylbHealthCheckToTerraform(struct?: ProxylbHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delay_loop: cdktf.numberToTerraform(struct!.delayLoop),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface ProxylbRule {
  /** The name of load balancing group. When proxyLB received request which matched to `host` and `path`, proxyLB forwards the request to servers that having same group name. The length of this value must be in the range [`1`-`10`] */
  readonly group?: string;
  /** The value of HTTP host header that is used as condition of rule-based balancing */
  readonly host?: string;
  /** The request path that is used as condition of rule-based balancing */
  readonly path?: string;
}

function proxylbRuleToTerraform(struct?: ProxylbRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface ProxylbServer {
  /** The flag to enable as destination of load balancing */
  readonly enabled?: boolean;
  /** The name of load balancing group. This is used when using rule-based load balancing. The length of this value must be in the range [`1`-`10`] */
  readonly group?: string;
  /** The IP address of the destination server */
  readonly ipAddress: string;
  /** The port number of the destination server. This must be in the range [`1`-`65535`] */
  readonly port: number;
}

function proxylbServerToTerraform(struct?: ProxylbServer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group: cdktf.stringToTerraform(struct!.group),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface ProxylbSorryServer {
  /** The IP address of the SorryServer. This will be used when all servers are down */
  readonly ipAddress: string;
  /** The port number of the SorryServer. This will be used when all servers are down */
  readonly port?: number;
}

function proxylbSorryServerToTerraform(struct?: ProxylbSorryServer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export interface ProxylbTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function proxylbTimeoutsToTerraform(struct?: ProxylbTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class Proxylb extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ProxylbConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_proxylb',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._gzip = config.gzip;
    this._iconId = config.iconId;
    this._name = config.name;
    this._plan = config.plan;
    this._region = config.region;
    this._stickySession = config.stickySession;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._vipFailover = config.vipFailover;
    this._bindPort = config.bindPort;
    this._certificate = config.certificate;
    this._healthCheck = config.healthCheck;
    this._rule = config.rule;
    this._server = config.server;
    this._sorryServer = config.sorryServer;
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

  // gzip - computed: false, optional: true, required: false
  private _gzip?: boolean;
  public get gzip() {
    return this.getBooleanAttribute('gzip');
  }
  public set gzip(value: boolean ) {
    this._gzip = value;
  }
  public resetGzip() {
    this._gzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip
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

  // plan - computed: false, optional: true, required: false
  private _plan?: number;
  public get plan() {
    return this.getNumberAttribute('plan');
  }
  public set plan(value: number ) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // proxy_networks - computed: true, optional: false, required: false
  public get proxyNetworks() {
    return this.getListAttribute('proxy_networks');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string ) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // sticky_session - computed: false, optional: true, required: false
  private _stickySession?: boolean;
  public get stickySession() {
    return this.getBooleanAttribute('sticky_session');
  }
  public set stickySession(value: boolean ) {
    this._stickySession = value;
  }
  public resetStickySession() {
    this._stickySession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionInput() {
    return this._stickySession
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vip_failover - computed: false, optional: true, required: false
  private _vipFailover?: boolean;
  public get vipFailover() {
    return this.getBooleanAttribute('vip_failover');
  }
  public set vipFailover(value: boolean ) {
    this._vipFailover = value;
  }
  public resetVipFailover() {
    this._vipFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipFailoverInput() {
    return this._vipFailover
  }

  // bind_port - computed: false, optional: false, required: true
  private _bindPort: ProxylbBindPort[];
  public get bindPort() {
    return this.interpolationForAttribute('bind_port') as any;
  }
  public set bindPort(value: ProxylbBindPort[]) {
    this._bindPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPortInput() {
    return this._bindPort
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: ProxylbCertificate[];
  public get certificate() {
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: ProxylbCertificate[] ) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck: ProxylbHealthCheck[];
  public get healthCheck() {
    return this.interpolationForAttribute('health_check') as any;
  }
  public set healthCheck(value: ProxylbHealthCheck[]) {
    this._healthCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: ProxylbRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: ProxylbRule[] ) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // server - computed: false, optional: true, required: false
  private _server?: ProxylbServer[];
  public get server() {
    return this.interpolationForAttribute('server') as any;
  }
  public set server(value: ProxylbServer[] ) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }

  // sorry_server - computed: false, optional: true, required: false
  private _sorryServer?: ProxylbSorryServer[];
  public get sorryServer() {
    return this.interpolationForAttribute('sorry_server') as any;
  }
  public set sorryServer(value: ProxylbSorryServer[] ) {
    this._sorryServer = value;
  }
  public resetSorryServer() {
    this._sorryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sorryServerInput() {
    return this._sorryServer
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProxylbTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ProxylbTimeouts ) {
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
      gzip: cdktf.booleanToTerraform(this._gzip),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.numberToTerraform(this._plan),
      region: cdktf.stringToTerraform(this._region),
      sticky_session: cdktf.booleanToTerraform(this._stickySession),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      vip_failover: cdktf.booleanToTerraform(this._vipFailover),
      bind_port: cdktf.listMapper(proxylbBindPortToTerraform)(this._bindPort),
      certificate: cdktf.listMapper(proxylbCertificateToTerraform)(this._certificate),
      health_check: cdktf.listMapper(proxylbHealthCheckToTerraform)(this._healthCheck),
      rule: cdktf.listMapper(proxylbRuleToTerraform)(this._rule),
      server: cdktf.listMapper(proxylbServerToTerraform)(this._server),
      sorry_server: cdktf.listMapper(proxylbSorryServerToTerraform)(this._sorryServer),
      timeouts: proxylbTimeoutsToTerraform(this._timeouts),
    };
  }
}
