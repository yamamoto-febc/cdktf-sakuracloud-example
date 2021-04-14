// https://www.terraform.io/docs/providers/sakuracloud/r/data_sakuracloud_proxylb.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSakuracloudProxylbConfig extends cdktf.TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataSakuracloudProxylbFilter[];
}
export class DataSakuracloudProxylbBindPortResponseHeader extends cdktf.ComplexComputedList {

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataSakuracloudProxylbBindPort extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // proxy_mode - computed: true, optional: false, required: false
  public get proxyMode() {
    return this.getStringAttribute('proxy_mode');
  }

  // redirect_to_https - computed: true, optional: false, required: false
  public get redirectToHttps() {
    return this.getBooleanAttribute('redirect_to_https');
  }

  // response_header - computed: true, optional: false, required: false
  public get responseHeader() {
    return this.interpolationForAttribute('response_header') as any;
  }

  // support_http2 - computed: true, optional: false, required: false
  public get supportHttp2() {
    return this.getBooleanAttribute('support_http2');
  }
}
export class DataSakuracloudProxylbCertificateAdditionalCertificate extends cdktf.ComplexComputedList {

  // intermediate_cert - computed: true, optional: false, required: false
  public get intermediateCert() {
    return this.getStringAttribute('intermediate_cert');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // server_cert - computed: true, optional: false, required: false
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
}
export class DataSakuracloudProxylbCertificate extends cdktf.ComplexComputedList {

  // additional_certificate - computed: true, optional: false, required: false
  public get additionalCertificate() {
    return this.interpolationForAttribute('additional_certificate') as any;
  }

  // intermediate_cert - computed: true, optional: false, required: false
  public get intermediateCert() {
    return this.getStringAttribute('intermediate_cert');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // server_cert - computed: true, optional: false, required: false
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
}
export class DataSakuracloudProxylbHealthCheck extends cdktf.ComplexComputedList {

  // delay_loop - computed: true, optional: false, required: false
  public get delayLoop() {
    return this.getNumberAttribute('delay_loop');
  }

  // host_header - computed: true, optional: false, required: false
  public get hostHeader() {
    return this.getStringAttribute('host_header');
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
}
export class DataSakuracloudProxylbRule extends cdktf.ComplexComputedList {

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataSakuracloudProxylbServer extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export class DataSakuracloudProxylbSorryServer extends cdktf.ComplexComputedList {

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataSakuracloudProxylbFilterCondition {
  /** The name of the target field. This value is case-sensitive */
  readonly name: string;
  /** The values of the condition. If multiple values ​​are specified, they combined as AND condition */
  readonly values: string[];
}

function dataSakuracloudProxylbFilterConditionToTerraform(struct?: DataSakuracloudProxylbFilterCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface DataSakuracloudProxylbFilter {
  /** The resource id on SakuraCloud used for filtering */
  readonly id?: string;
  /** The resource names on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly names?: string[];
  /** The resource tags on SakuraCloud used for filtering. If multiple values ​​are specified, they combined as AND condition */
  readonly tags?: string[];
  /** condition block */
  readonly condition?: DataSakuracloudProxylbFilterCondition[];
}

function dataSakuracloudProxylbFilterToTerraform(struct?: DataSakuracloudProxylbFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.names),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    condition: cdktf.listMapper(dataSakuracloudProxylbFilterConditionToTerraform)(struct!.condition),
  }
}


// Resource

export class DataSakuracloudProxylb extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataSakuracloudProxylbConfig = {}) {
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
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_port - computed: true, optional: false, required: false
  public bindPort(index: string) {
    return new DataSakuracloudProxylbBindPort(this, 'bind_port', index);
  }

  // certificate - computed: true, optional: false, required: false
  public certificate(index: string) {
    return new DataSakuracloudProxylbCertificate(this, 'certificate', index);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // gzip - computed: true, optional: false, required: false
  public get gzip() {
    return this.getBooleanAttribute('gzip');
  }

  // health_check - computed: true, optional: false, required: false
  public healthCheck(index: string) {
    return new DataSakuracloudProxylbHealthCheck(this, 'health_check', index);
  }

  // icon_id - computed: true, optional: false, required: false
  public get iconId() {
    return this.getStringAttribute('icon_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getNumberAttribute('plan');
  }

  // proxy_networks - computed: true, optional: false, required: false
  public get proxyNetworks() {
    return this.getListAttribute('proxy_networks');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // rule - computed: true, optional: false, required: false
  public rule(index: string) {
    return new DataSakuracloudProxylbRule(this, 'rule', index);
  }

  // server - computed: true, optional: false, required: false
  public server(index: string) {
    return new DataSakuracloudProxylbServer(this, 'server', index);
  }

  // sorry_server - computed: true, optional: false, required: false
  public sorryServer(index: string) {
    return new DataSakuracloudProxylbSorryServer(this, 'sorry_server', index);
  }

  // sticky_session - computed: true, optional: false, required: false
  public get stickySession() {
    return this.getBooleanAttribute('sticky_session');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vip_failover - computed: true, optional: false, required: false
  public get vipFailover() {
    return this.getBooleanAttribute('vip_failover');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataSakuracloudProxylbFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataSakuracloudProxylbFilter[] ) {
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
      filter: cdktf.listMapper(dataSakuracloudProxylbFilterToTerraform)(this._filter),
    };
  }
}
