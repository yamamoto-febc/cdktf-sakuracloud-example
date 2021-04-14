// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_simple_monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudSimpleMonitorConfig extends cdktf.TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataSakuracloudSimpleMonitorFilter[];
}
export class DataSakuracloudSimpleMonitorHealthCheck extends cdktf.ComplexComputedList {

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }

  // contains_string - computed: true, optional: false, required: false
  public get containsString() {
    return this.getStringAttribute('contains_string');
  }

  // excepcted_data - computed: true, optional: false, required: false
  public get excepctedData() {
    return this.getStringAttribute('excepcted_data');
  }

  // host_header - computed: true, optional: false, required: false
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }

  // http2 - computed: true, optional: false, required: false
  public get http2() {
    return this.getBooleanAttribute('http2');
  }

  // oid - computed: true, optional: false, required: false
  public get oid() {
    return this.getStringAttribute('oid');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // qname - computed: true, optional: false, required: false
  public get qname() {
    return this.getStringAttribute('qname');
  }

  // remaining_days - computed: true, optional: false, required: false
  public get remainingDays() {
    return this.getNumberAttribute('remaining_days');
  }

  // sni - computed: true, optional: false, required: false
  public get sni() {
    return this.getBooleanAttribute('sni');
  }

  // snmp_version - computed: true, optional: false, required: false
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataSakuracloudSimpleMonitorFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudSimpleMonitorFilterConditionToTerraform(struct?: DataSakuracloudSimpleMonitorFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudSimpleMonitorFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudSimpleMonitorFilterCondition[];
}

function dataSakuracloudSimpleMonitorFilterToTerraform(struct?: DataSakuracloudSimpleMonitorFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudSimpleMonitorFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudSimpleMonitor extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudSimpleMonitorConfig = {}) {
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
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_loop - computed: true, optional: false, required: false
  public get delayLoop() {
    return this.getNumberAttribute('delay_loop');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // health_check - computed: true, optional: false, required: false
  public healthCheck(index: string) {
    return new DataSakuracloudSimpleMonitorHealthCheck(this, 'health_check', index);
  }

  // icon_id - computed: true, optional: false, required: false
  public get iconId() {
    return this.getStringAttribute('icon_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notify_email_enabled - computed: true, optional: false, required: false
  public get notifyEmailEnabled() {
    return this.getBooleanAttribute('notify_email_enabled');
  }

  // notify_email_html - computed: true, optional: false, required: false
  public get notifyEmailHtml() {
    return this.getBooleanAttribute('notify_email_html');
  }

  // notify_interval - computed: true, optional: false, required: false
  public get notifyInterval() {
    return this.getNumberAttribute('notify_interval');
  }

  // notify_slack_enabled - computed: true, optional: false, required: false
  public get notifySlackEnabled() {
    return this.getBooleanAttribute('notify_slack_enabled');
  }

  // notify_slack_webhook - computed: true, optional: false, required: false
  public get notifySlackWebhook() {
    return this.getStringAttribute('notify_slack_webhook');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataSakuracloudSimpleMonitorFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudSimpleMonitorFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudSimpleMonitorFilterToTerraform)(this._filter),
    };
  }
}
