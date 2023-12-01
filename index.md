---
layout: default
title: EniDev
---

<!-- Databases -->
<p align="center">
    {% for item in site.data.root.db %}
        <a href="{{ item.link | relative_url }}">
            <kbd><img 
                src="{{ item.logo | relative_url }}" 
                alt="{{ item.name }}"
                height="80"></kbd>
        </a>
    {% endfor %}
</p>


<!-- Programming -->
<p align="center">
  {% for item in site.data.root.programming %}
    <a href="{{ item.link | relative_url }}">
        <kbd><img 
            src="{{ item.logo | relative_url }}"
            alt="{{ item.name }}"
            title="{{ item.name }}" 
            height="80"></kbd>
    </a>
  {% endfor %}
</p>

<!-- Editores -->
<p align="center">
  {% for item in site.data.root.editors %}
    <a href="{{ item.link | relative_url }}">
        <kbd><img 
            src="{{ item.logo | relative_url }}"
            alt="{{ item.name }}"
            height="80"></kbd>
    </a>
  {% endfor %}
</p>

<!-- Herramientas -->
<p align="center">
    <!-- MermaidJS -->
    <a href="{{ '/mermaidjs' | relative_url }}"><kbd><img src="{{ '/assets/images/logos/mermaid.svg' | relative_url }}" height="80"></kbd></a>
</p>

<br>
<h3 align="center">Recursos web</h3>
<!-- Recursos web -->
<p align="center">
    {% for item in site.data.recursos_web %}
        <a href="{{ item.link | relative_url }}">
            <kbd>{{ item.name }}</kbd>
        </a>
    {% endfor %}
</p>
