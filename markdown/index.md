---
title: Markdown
layout: default
---

## CONTENIDO


<div class="flex">
{% for article in site.data.markdown_papers %}
 <div class="col">
  {% include card-paper.html
    title=article.name
    img=article.img
    href=article.url
  %}
    </div>
    {% endfor %}
</div>
