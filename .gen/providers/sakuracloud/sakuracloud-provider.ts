// https://www.terraform.io/docs/providers/sakuracloud/r/sakuracloud_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SakuracloudProviderConfig {
  /** The value of AcceptLanguage header used when calling SakuraCloud API. It can also be sourced from the `SAKURACLOUD_ACCEPT_LANGUAGE` environment variables, or via a shared credentials file if `profile` is specified */
  readonly acceptLanguage?: string;
  /** The maximum number of SakuraCloud API calls per second. It can also be sourced from the `SAKURACLOUD_RATE_LIMIT` environment variables, or via a shared credentials file if `profile` is specified. Default:`10` */
  readonly apiRequestRateLimit?: number;
  /** The timeout seconds for each SakuraCloud API call. It can also be sourced from the `SAKURACLOUD_API_REQUEST_TIMEOUT` environment variables, or via a shared credentials file if `profile` is specified. Default:`300` */
  readonly apiRequestTimeout?: number;
  /** The root URL of SakuraCloud API. It can also be sourced from the `SAKURACLOUD_API_ROOT_URL` environment variables, or via a shared credentials file if `profile` is specified. Default:`https://secure.sakura.ad.jp/cloud/zone` */
  readonly apiRootUrl?: string;
  /** The name of zone to use as default for global resources. It must be provided, but it can also be sourced from the `SAKURACLOUD_DEFAULT_ZONE` environment variables, or via a shared credentials file if `profile` is specified */
  readonly defaultZone?: string;
  /** The flag to enable fake of SakuraCloud API call. It is for debugging or developping the provider. It can also be sourced from the `FAKE_MODE` environment variables, or via a shared credentials file if `profile` is specified */
  readonly fakeMode?: string;
  /** The file path used by SakuraCloud API fake driver for storing fake data. It is for debugging or developping the provider. It can also be sourced from the `FAKE_STORE_PATH` environment variables, or via a shared credentials file if `profile` is specified */
  readonly fakeStorePath?: string;
  /** The profile name of your SakuraCloud account. Default:`default` */
  readonly profile?: string;
  /** The maximum number of API call retries used when SakuraCloud API returns status code `423` or `503`. It can also be sourced from the `SAKURACLOUD_RETRY_MAX` environment variables, or via a shared credentials file if `profile` is specified. Default:`100` */
  readonly retryMax?: number;
  /** The maximum wait interval(in seconds) for retrying API call used when SakuraCloud API returns status code `423` or `503`.  It can also be sourced from the `SAKURACLOUD_RETRY_WAIT_MAX` environment variables, or via a shared credentials file if `profile` is specified */
  readonly retryWaitMax?: number;
  /** The minimum wait interval(in seconds) for retrying API call used when SakuraCloud API returns status code `423` or `503`. It can also be sourced from the `SAKURACLOUD_RETRY_WAIT_MIN` environment variables, or via a shared credentials file if `profile` is specified */
  readonly retryWaitMin?: number;
  /** The API secret of your SakuraCloud account. It must be provided, but it can also be sourced from the `SAKURACLOUD_ACCESS_TOKEN_SECRET` environment variables, or via a shared credentials file if `profile` is specified */
  readonly secret?: string;
  /** The API token of your SakuraCloud account. It must be provided, but it can also be sourced from the `SAKURACLOUD_ACCESS_TOKEN` environment variables, or via a shared credentials file if `profile` is specified */
  readonly token?: string;
  /** The flag to enable output trace log. It can also be sourced from the `SAKURACLOUD_TRACE` environment variables, or via a shared credentials file if `profile` is specified */
  readonly trace?: string;
  /** The name of zone to use as default. It must be provided, but it can also be sourced from the `SAKURACLOUD_ZONE` environment variables, or via a shared credentials file if `profile` is specified */
  readonly zone?: string;
  /** A list of available SakuraCloud zone name. It can also be sourced via a shared credentials file if `profile` is specified. Default:[`is1a`, `is1b`, `tk1a`, `tk1v`] */
  readonly zones?: string[];
  /** Alias name */
  readonly alias?: string;
}

// Resource

export class SakuracloudProvider extends cdktf.TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SakuracloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud',
        providerVersionConstraint: '~> 2.8'
      },
      terraformProviderSource: 'sacloud/sakuracloud'
    });
    this._acceptLanguage = config.acceptLanguage;
    this._apiRequestRateLimit = config.apiRequestRateLimit;
    this._apiRequestTimeout = config.apiRequestTimeout;
    this._apiRootUrl = config.apiRootUrl;
    this._defaultZone = config.defaultZone;
    this._fakeMode = config.fakeMode;
    this._fakeStorePath = config.fakeStorePath;
    this._profile = config.profile;
    this._retryMax = config.retryMax;
    this._retryWaitMax = config.retryWaitMax;
    this._retryWaitMin = config.retryWaitMin;
    this._secret = config.secret;
    this._token = config.token;
    this._trace = config.trace;
    this._zone = config.zone;
    this._zones = config.zones;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string;
  public get acceptLanguage() {
    return this._acceptLanguage;
  }
  public set acceptLanguage(value: string  | undefined) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage
  }

  // api_request_rate_limit - computed: false, optional: true, required: false
  private _apiRequestRateLimit?: number;
  public get apiRequestRateLimit() {
    return this._apiRequestRateLimit;
  }
  public set apiRequestRateLimit(value: number  | undefined) {
    this._apiRequestRateLimit = value;
  }
  public resetApiRequestRateLimit() {
    this._apiRequestRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRequestRateLimitInput() {
    return this._apiRequestRateLimit
  }

  // api_request_timeout - computed: false, optional: true, required: false
  private _apiRequestTimeout?: number;
  public get apiRequestTimeout() {
    return this._apiRequestTimeout;
  }
  public set apiRequestTimeout(value: number  | undefined) {
    this._apiRequestTimeout = value;
  }
  public resetApiRequestTimeout() {
    this._apiRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRequestTimeoutInput() {
    return this._apiRequestTimeout
  }

  // api_root_url - computed: false, optional: true, required: false
  private _apiRootUrl?: string;
  public get apiRootUrl() {
    return this._apiRootUrl;
  }
  public set apiRootUrl(value: string  | undefined) {
    this._apiRootUrl = value;
  }
  public resetApiRootUrl() {
    this._apiRootUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRootUrlInput() {
    return this._apiRootUrl
  }

  // default_zone - computed: false, optional: true, required: false
  private _defaultZone?: string;
  public get defaultZone() {
    return this._defaultZone;
  }
  public set defaultZone(value: string  | undefined) {
    this._defaultZone = value;
  }
  public resetDefaultZone() {
    this._defaultZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultZoneInput() {
    return this._defaultZone
  }

  // fake_mode - computed: false, optional: true, required: false
  private _fakeMode?: string;
  public get fakeMode() {
    return this._fakeMode;
  }
  public set fakeMode(value: string  | undefined) {
    this._fakeMode = value;
  }
  public resetFakeMode() {
    this._fakeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeModeInput() {
    return this._fakeMode
  }

  // fake_store_path - computed: false, optional: true, required: false
  private _fakeStorePath?: string;
  public get fakeStorePath() {
    return this._fakeStorePath;
  }
  public set fakeStorePath(value: string  | undefined) {
    this._fakeStorePath = value;
  }
  public resetFakeStorePath() {
    this._fakeStorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeStorePathInput() {
    return this._fakeStorePath
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string;
  public get profile() {
    return this._profile;
  }
  public set profile(value: string  | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile
  }

  // retry_max - computed: false, optional: true, required: false
  private _retryMax?: number;
  public get retryMax() {
    return this._retryMax;
  }
  public set retryMax(value: number  | undefined) {
    this._retryMax = value;
  }
  public resetRetryMax() {
    this._retryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxInput() {
    return this._retryMax
  }

  // retry_wait_max - computed: false, optional: true, required: false
  private _retryWaitMax?: number;
  public get retryWaitMax() {
    return this._retryWaitMax;
  }
  public set retryWaitMax(value: number  | undefined) {
    this._retryWaitMax = value;
  }
  public resetRetryWaitMax() {
    this._retryWaitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitMaxInput() {
    return this._retryWaitMax
  }

  // retry_wait_min - computed: false, optional: true, required: false
  private _retryWaitMin?: number;
  public get retryWaitMin() {
    return this._retryWaitMin;
  }
  public set retryWaitMin(value: number  | undefined) {
    this._retryWaitMin = value;
  }
  public resetRetryWaitMin() {
    this._retryWaitMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitMinInput() {
    return this._retryWaitMin
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string;
  public get secret() {
    return this._secret;
  }
  public set secret(value: string  | undefined) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // token - computed: false, optional: true, required: false
  private _token?: string;
  public get token() {
    return this._token;
  }
  public set token(value: string  | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: string;
  public get trace() {
    return this._trace;
  }
  public set trace(value: string  | undefined) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string  | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this._zones;
  }
  public set zones(value: string[]  | undefined) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string  | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      api_request_rate_limit: cdktf.numberToTerraform(this._apiRequestRateLimit),
      api_request_timeout: cdktf.numberToTerraform(this._apiRequestTimeout),
      api_root_url: cdktf.stringToTerraform(this._apiRootUrl),
      default_zone: cdktf.stringToTerraform(this._defaultZone),
      fake_mode: cdktf.stringToTerraform(this._fakeMode),
      fake_store_path: cdktf.stringToTerraform(this._fakeStorePath),
      profile: cdktf.stringToTerraform(this._profile),
      retry_max: cdktf.numberToTerraform(this._retryMax),
      retry_wait_max: cdktf.numberToTerraform(this._retryWaitMax),
      retry_wait_min: cdktf.numberToTerraform(this._retryWaitMin),
      secret: cdktf.stringToTerraform(this._secret),
      token: cdktf.stringToTerraform(this._token),
      trace: cdktf.stringToTerraform(this._trace),
      zone: cdktf.stringToTerraform(this._zone),
      zones: cdktf.listMapper(cdktf.stringToTerraform)(this._zones),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
