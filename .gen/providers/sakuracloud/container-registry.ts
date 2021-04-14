// https://www.terraform.io/docs/providers/sakuracloud/r/container_registry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRegistryConfig extends cdktf.TerraformMetaArguments {
  /** The level of access that allow to users. This must be one of [`readwrite`/`readonly`/`none`] */
  readonly accessLevel: string;
  /** The description of the Container Registry. The length of this value must be in the range [`1`-`512`] */
  readonly description?: string;
  /** The icon id to attach to the Container Registry */
  readonly iconId?: string;
  /** The name of the Container Registry. The length of this value must be in the range [`1`-`64`] */
  readonly name: string;
  /** The label at the lowest of the FQDN used when be accessed from users. The length of this value must be in the range [`1`-`64`] */
  readonly subdomainLabel: string;
  /** Any tags to assign to the Container Registry */
  readonly tags?: string[];
  /** The alias for accessing the container registry */
  readonly virtualDomain?: string;
  /** timeouts block */
  readonly timeouts?: ContainerRegistryTimeouts;
  /** user block */
  readonly user?: ContainerRegistryUser[];
}
export interface ContainerRegistryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function containerRegistryTimeoutsToTerraform(struct?: ContainerRegistryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ContainerRegistryUser {
  /** The user name used to authenticate remote access */
  readonly name: string;
  /** The password used to authenticate remote access */
  readonly password: string;
  /** The level of access that allow to the user. This must be one of [`all`/`readwrite`/`readonly`] */
  readonly permission: string;
}

function containerRegistryUserToTerraform(struct?: ContainerRegistryUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


// Resource

export class ContainerRegistry extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'sakuracloud_container_registry',
      terraformGeneratorMetadata: {
        providerName: 'sakuracloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessLevel = config.accessLevel;
    this._description = config.description;
    this._iconId = config.iconId;
    this._name = config.name;
    this._subdomainLabel = config.subdomainLabel;
    this._tags = config.tags;
    this._virtualDomain = config.virtualDomain;
    this._timeouts = config.timeouts;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: false, required: true
  private _accessLevel: string;
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel
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

  // subdomain_label - computed: false, optional: false, required: true
  private _subdomainLabel: string;
  public get subdomainLabel() {
    return this.getStringAttribute('subdomain_label');
  }
  public set subdomainLabel(value: string) {
    this._subdomainLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainLabelInput() {
    return this._subdomainLabel
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

  // virtual_domain - computed: false, optional: true, required: false
  private _virtualDomain?: string;
  public get virtualDomain() {
    return this.getStringAttribute('virtual_domain');
  }
  public set virtualDomain(value: string ) {
    this._virtualDomain = value;
  }
  public resetVirtualDomain() {
    this._virtualDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualDomainInput() {
    return this._virtualDomain
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerRegistryTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ContainerRegistryTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // user - computed: false, optional: true, required: false
  private _user?: ContainerRegistryUser[];
  public get user() {
    return this.interpolationForAttribute('user') as any;
  }
  public set user(value: ContainerRegistryUser[] ) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      description: cdktf.stringToTerraform(this._description),
      icon_id: cdktf.stringToTerraform(this._iconId),
      name: cdktf.stringToTerraform(this._name),
      subdomain_label: cdktf.stringToTerraform(this._subdomainLabel),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      virtual_domain: cdktf.stringToTerraform(this._virtualDomain),
      timeouts: containerRegistryTimeoutsToTerraform(this._timeouts),
      user: cdktf.listMapper(containerRegistryUserToTerraform)(this._user),
    };
  }
}
