tt_content.bootstrap_package_accordion = COA
tt_content.bootstrap_package_accordion {
    10 =< lib.stdheader
    20 = FLUIDTEMPLATE
    20 {
        file = {$plugin.bootstrap_package_contentelements.view.templateRootPath}Bootstrap/Accordion.html
        partialRootPath = {$plugin.bootstrap_package_contentelements.view.partialRootPath}
        layoutRootPath = {$plugin.bootstrap_package_contentelements.view.layoutRootPath}
    }
}
