//@ts-nocheck
import { mount as mountProductsList } from "sharedLib2/SharedLib2Index";
import { mount as mountSharedComponents } from "sharedLib1/SharedLib1Index";

mountProductsList(document.querySelector("#container-shared2"));
mountSharedComponents(document.querySelector("#container-shared"));
