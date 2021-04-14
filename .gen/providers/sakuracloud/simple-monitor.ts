// https://www.terraform.io/docs/providers/sakuracloud/r/simple_monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SimpleMonitorConfig extends cdktf.TerraformMetaArguments {
  /** The interval in seconds between checks. This must be in the range [`60`-`3600`] */
  readonly delayLoop?: number;
  /** The description of the SimpleMonitor. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The flag to enable monitoring by the simple monitor */
  readonly enabled?: boolean;
  /** The icon id to attach to the SimpleMonitor */
  readonly iconId?: string;
  /** The flag to enable notification by email */
  readonly notifyEmailEnabled?: boolean;
  /** The flag to enable HTML format instead of text format */
  readonly notifyEmailHtml?: boolean;
  /** The interval in hours between notification. This must be in the range [`1`-`72`] */
  readonly notifyInterval?: number;
  /** The flag to enable notification by slack/discord */
  readonly notifySlackEnabled?: boolean;
  /** The webhook URL for sending notification by slack/discord */
  readonly notifySlackWebhook?: string;
  /** Any tags to assign to the SimpleMonitor */
  readonly tags?: string[];
  /** The monitoring target of the simple monitor. This must be IP address or FQDN */
  readonly target: string;
  /** health_check block */
  readonly healthCheck: SimpleMonitorHealthCheck[];
  /** timeouts block */
  readonly timeouts?: SimpleMonitorTimeouts;
}
export interface SimpleMonitorHealthCheck {
  /** The SNMP community string used when checking by SNMP */
  readonly community?: string;
  /** The string that should be included in the response body when checking for HTTP/HTTPS */
  readonly containsString?: string;
  /** The expected value used when checking by DNS */
  readonly excepctedData?: string;
  /** The value of host header send when checking by HTTP/HTTPS */
  readonly hostHeader?: string;
  /** The flag to enable HTTP/2 when checking by HTTPS */
  readonly http2?: boolean;
  /** The SNMP OID used when checking by SNMP */
  readonly oid?: string;
  /** The password for basic auth used when checking by HTTP/HTTPS */
  readonly password?: string;
  /** The path used when checking by HTTP/HTTPS */
  readonly path?: string;
  /** The target port number */
  readonly port?: number;
  /** The protocol used for health checks. This must be one of [`http`/`https`/`ping`/`tcp`/`dns`/`ssh`/`smtp`/`pop3`/`snmp`/`sslcertificate`] */
  readonly protocol: string;
  /** The FQDN used when checking by DNS */
  readonly qname?: string;
  /** The number of remaining days until certificate expiration used when checking SSL certificates. This must be in the range [`1`-`9999`] */
  readonly remainingDays?: number;
  /** The flag to enable SNI when checking by HTTP/HTTPS */
  readonly sni?: boolean;
  /** The SNMP version used when checking by SNMP. This must be one of `1`/`2c` */
  readonly snmpVersion?: string;
  /** The response-code to expect when checking by HTTP/HTTPS */
  readonly status?: number;
  /** The user name for basic auth used when checking by HTTP/HTTPS */
  readonly username?: string;
}

function simpleMonitorHealthCheckToTerraform(struct?: SimpleMonitorHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    community: cdktf.stringToTerraform(struct!.community),
    contains_string: cdktf.stringToTerraform(struct!.containsString),
    excepcted_data: cdktf.stringToTerraform(struct!.excepctedData),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    http2: cdktf.booleanToTerraform(struct!.http2),
    oid: cdktf.stringToTerraform(struct!.oid),
    password: cdktf.stringToTerraform(struct!.password),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    qname: cdktf.stringToTerraform(struct!.qname),
    remaining_days: cdktf.numberToTerraform(struct!.remainingDays),
    sni: cdktf.booleanToTerraform(struct!.sni),
    snmp_version: cdktf.stringToTerraform(struct!.snmpVersion),
    status: cdktf.numberToTerraform(struct!.status),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface SimpleMonitorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function simpleMonitorTimeoutsToTerraform(struct?: SimpleMonitorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class SimpleMonitor extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SimpleMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_simple_monitor',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._delayLoop = config.delayLoop;
    this._description = config.description;
    this._enabled = config.enabled;
    this._iconId = config.iconId;
    this._notifyEmailEnabled = config.notifyEmailEnabled;
    this._notifyEmailHtml = config.notifyEmailHtml;
    this._notifyInterval = config.notifyInterval;
    this._notifySlackEnabled = config.notifySlackEnabled;
    this._notifySlackWebhook = config.notifySlackWebhook;
    this._tags = config.tags;
    this._target = config.target;
    this._healthCheck = config.healthCheck;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_loop - computed: false, optional: true, required: false
  private _delayLoop?: number;
  public get delayLoop() {
    return this.getNumberAttribute('delay_loop');
  }
  public set delayLoop(value: number ) {
    this._delayLoop = value;
  }
  public resetDelayLoop() {
    this._delayLoop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayLoopInput() {
    return this._delayLoop
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

  // notify_email_enabled - computed: false, optional: true, required: false
  private _notifyEmailEnabled?: boolean;
  public get notifyEmailEnabled() {
    return this.getBooleanAttribute('notify_email_enabled');
  }
  public set notifyEmailEnabled(value: boolean ) {
    this._notifyEmailEnabled = value;
  }
  public resetNotifyEmailEnabled() {
    this._notifyEmailEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEmailEnabledInput() {
    return this._notifyEmailEnabled
  }

  // notify_email_html - computed: false, optional: true, required: false
  private _notifyEmailHtml?: boolean;
  public get notifyEmailHtml() {
    return this.getBooleanAttribute('notify_email_html');
  }
  public set notifyEmailHtml(value: boolean ) {
    this._notifyEmailHtml = value;
  }
  public resetNotifyEmailHtml() {
    this._notifyEmailHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEmailHtmlInput() {
    return this._notifyEmailHtml
  }

  // notify_interval - computed: false, optional: true, required: false
  private _notifyInterval?: number;
  public get notifyInterval() {
    return this.getNumberAttribute('notify_interval');
  }
  public set notifyInterval(value: number ) {
    this._notifyInterval = value;
  }
  public resetNotifyInterval() {
    this._notifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyIntervalInput() {
    return this._notifyInterval
  }

  // notify_slack_enabled - computed: false, optional: true, required: false
  private _notifySlackEnabled?: boolean;
  public get notifySlackEnabled() {
    return this.getBooleanAttribute('notify_slack_enabled');
  }
  public set notifySlackEnabled(value: boolean ) {
    this._notifySlackEnabled = value;
  }
  public resetNotifySlackEnabled() {
    this._notifySlackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySlackEnabledInput() {
    return this._notifySlackEnabled
  }

  // notify_slack_webhook - computed: false, optional: true, required: false
  private _notifySlackWebhook?: string;
  public get notifySlackWebhook() {
    return this.getStringAttribute('notify_slack_webhook');
  }
  public set notifySlackWebhook(value: string ) {
    this._notifySlackWebhook = value;
  }
  public resetNotifySlackWebhook() {
    this._notifySlackWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySlackWebhookInput() {
    return this._notifySlackWebhook
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

  // target - computed: false, optional: false, required: true
  private _target: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck: SimpleMonitorHealthCheck[];
  public get healthCheck() {
    return this.interpolationForAttribute('health_check') as any;
  }
  public set healthCheck(value: SimpleMonitorHealthCheck[]) {
    this._healthCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SimpleMonitorTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SimpleMonitorTimeouts ) {
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
      delay_loop: cdktf.numberToTerraform(this._delayLoop),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      icon_id: cdktf.stringToTerraform(this._iconId),
      notify_email_enabled: cdktf.booleanToTerraform(this._notifyEmailEnabled),
      notify_email_html: cdktf.booleanToTerraform(this._notifyEmailHtml),
      notify_interval: cdktf.numberToTerraform(this._notifyInterval),
      notify_slack_enabled: cdktf.booleanToTerraform(this._notifySlackEnabled),
      notify_slack_webhook: cdktf.stringToTerraform(this._notifySlackWebhook),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      target: cdktf.stringToTerraform(this._target),
      health_check: cdktf.listMapper(simpleMonitorHealthCheckToTerraform)(this._healthCheck),
      timeouts: simpleMonitorTimeoutsToTerraform(this._timeouts),
    };
  }
}
