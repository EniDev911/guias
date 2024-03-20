---
layout: home
title: EniDev
---


<style>
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
    margin: 20px 0;
  }
</style>
<!-- Databases -->
<div class="row">
  {% for item in site.data.root.db %}
  <a href="{{ item.link | relative_url }}">
    <div class="card">
      <div class="info">
        <img
          src="{{ item.logo | relative_url }}"
          alt="{{ item.name }}"
          height="80">
      </div>
    </div>
  </a>
  {% endfor %}
</div>

<!-- Programming -->
<div class="row">
  {% for item in site.data.root.programming %}
  <a href="{{ item.link | relative_url }}">
    <div class="card">
      <div class="info">
        <img
          src="{{ item.logo | relative_url }}"
          alt="{{ item.name }}"
          height="80">
      </div>
    </div>
  </a>
  {% endfor %}
</div>

<!-- Editores -->
<div class="row">
  {% for item in site.data.root.editors %}
  <a href="{{ item.link | relative_url }}">
    <div class="card">
      <div class="info">
        <img
          src="{{ item.logo | relative_url }}"
          alt="{{ item.name }}"
          height="80">
      </div>
    </div>
  </a>
  {% endfor %}
</div>


<!-- Herramientas -->
<p align="center">
    <!-- MermaidJS -->
    <a href="{{ '/docs/mermaid.html' | relative_url }}"><kbd><img src="{{ '/assets/images/logos/mermaid.svg' | relative_url }}" height="80"></kbd></a>
</p>

<br>

<!-- Generadores -->
<p align="center">
  {% for item in site.data.root.generadores %}
  <a href="{{ item.link | relative_url }}">
    <kbd><img
        src="{{ item.logo | relative_url }}"
        alt="{{ item.name }}"
        height="80"></kbd>
    </a>
    {% endfor %}
</p>


<!-- Recursos web -->
<p align="center">
    {% for item in site.data.recursos_web %}
    <a href="{{ item.link | relative_url }}" style="display: block; margin-bottom: 8px">
        <kbd>{{ item.name }}</kbd>
    </a>
    {% endfor %}
</p>

